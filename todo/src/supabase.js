import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ehjcnlibqqqjldirfihg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoamNubGlicXFxamxkaXJmaWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2ODA1MDMsImV4cCI6MjA2MzI1NjUwM30.cQb_4KDscJcVGxQVOqnk0QPsS-Puzqj7Cj3Y3oaCOcI';
export const supabase = createClient(supabaseUrl, supabaseKey);