import { createClient } from '@supabase/supabase-js'

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || 'https://jbccqceozxvrkvpvcmch.supabase.co'
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpiY2NxY2Vvenh2cmt2cHZjbWNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5MjQ4MjUsImV4cCI6MjA3ODUwMDgyNX0.KsZG_8ZQtvXYjdIZMhmmFbBByIgp1b7PNhmPM_L59D8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
  },
})



