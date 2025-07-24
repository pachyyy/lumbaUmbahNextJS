// src/app/actions/login.action.ts (Enhanced version)
"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

interface LoginFormState {
  success: boolean;
  message: string;
  errors?: {
    email?: string;
    password?: string;
    general?: string;
  };
}

export async function loginAction(
  prevState: LoginFormState | null,
  formData: FormData
): Promise<LoginFormState> {
  try {
    // Extract and validate form data
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const errors: LoginFormState['errors'] = {};

    // Validation
    if (!email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        message: "Please fix the errors below",
        errors,
      };
    }

    // Authenticate user
    const authResponse = await authenticateUser(email, password);

    if (!authResponse.success) {
      return {
        success: false,
        message: authResponse.message,
        errors: { general: authResponse.message },
      };
    }

    // Set authentication cookies
    if (authResponse.token) {
      cookies().set("auth-token", authResponse.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
    }

    // Successful login - redirect will happen after return
    return {
      success: true,
      message: "Login successful! Redirecting...",
    };

  } catch (error) {
    console.error("Login action error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
      errors: { general: "Server error occurred" },
    };
  }
}

// Separate authentication function
async function authenticateUser(email: string, password: string) {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Authentication failed",
      };
    }

    return {
      success: true,
      message: "Authentication successful",
      token: data.token,
      user: data.user,
    };

  } catch (error) {
    return {
      success: false,
      message: "Network error. Please check your connection.",
    };
  }
}