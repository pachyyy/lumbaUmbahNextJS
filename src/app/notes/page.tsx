import { createClient } from "@/node_modules/@supabase/supabase-js";

export default async function Notes() {
  const supabase = await createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
  const { data: notes } = await supabase.from("notes").select();

  return <pre className="text-black">{JSON.stringify(notes, null, 2)}</pre>;
}
