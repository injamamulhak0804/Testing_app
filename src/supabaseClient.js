import {createClient} from "@supabase/supabase-js"

// To be secure

const supabaseURL = "https://bxbqqbabvesqrhlexnhj.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4YnFxYmFidmVzcXJobGV4bmhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4ODE5MzksImV4cCI6MjAyNzQ1NzkzOX0.cr7GBYBZXaeP59YRoIQr8vslnTvCPqv5px4KoXsdLpg";

export const supabase = createClient(supabaseURL, supabaseAnonKey)
