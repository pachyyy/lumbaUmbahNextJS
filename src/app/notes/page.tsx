import { createClient } from "@/node_modules/@supabase/supabase-js";

export default async function Notes() {
  const supabase = await createClient(
    "https://mbocnsdaqnysfqipknxc.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ib2Nuc2RhcW55c2ZxaXBrbnhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4MTkwMjksImV4cCI6MjA2ODM5NTAyOX0._RAAGCNDWO71jfnPIssf1gUBBI_lK1en5sNUpLn1NpA"
  );
  const { data: notes } = await supabase.from("notes").select();

  return <pre className="text-black">{JSON.stringify(notes, null, 2)}</pre>;
}
