import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qccxxpekakyflfcvqvig.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjY3h4cGVrYWt5ZmxmY3ZxdmlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxNDQ5ODQsImV4cCI6MjAyMjcyMDk4NH0.heKttmh911feQU0liljRbRK3c-yHGh8vR7FXovyt3-E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
