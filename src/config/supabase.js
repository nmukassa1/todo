import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tstcdexhaynbnjlshdxu.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzdGNkZXhoYXluYm5qbHNoZHh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyMjMwODcsImV4cCI6MjA0MTc5OTA4N30.27WASQ79WYBBz2Ky73y3yckz9xgp1nBrtx9r2QQL5V8'
export const supabase = createClient(supabaseUrl, supabaseKey)