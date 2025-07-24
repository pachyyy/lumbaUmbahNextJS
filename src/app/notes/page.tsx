import { createClient } from "@/node_modules/@supabase/supabase-js";

export default async function Notes() {
  const supabase = await createClient();
  const { data: notes } = await supabase.from("notes").select();

  return <pre className="text-black">{JSON.stringify(notes, null, 2)}</pre>;
}
