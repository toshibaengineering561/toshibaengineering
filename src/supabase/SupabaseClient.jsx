import { createClient } from '@supabase/supabase-js'

// Your environment variables (recommended)
const supabaseUrl = "https://jbccqceozxvrkvpvcmch.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpiY2NxY2Vvenh2cmt2cHZjbWNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5MjQ4MjUsImV4cCI6MjA3ODUwMDgyNX0.KsZG_8ZQtvXYjdIZMhmmFbBByIgp1b7PNhmPM_L59D8"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
