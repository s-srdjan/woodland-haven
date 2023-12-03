import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://irjxfxtcoefvjcxoiiws.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlyanhmeHRjb2VmdmpjeG9paXdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2MDQwMDAsImV4cCI6MjAxNzE4MDAwMH0.Ih3GZvotxc90bwSQ6oIB69YSIiOduwAEALwAXmeZp2s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
