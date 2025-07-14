'use server'

export async function loginAction(formData: FormData) {
    const values = Object.fromEntries(formData.entries());
    console.log(values);
}