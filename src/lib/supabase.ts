import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ContactSubmission = {
  id?: string;
  name: string;
  email: string;
  phone: string;
  location?: string;
  goal: string;
  best_time?: string;
  message?: string;
  language: 'pt' | 'en';
  created_at?: string;
};

export type Review = {
  id?: string;
  name: string;
  rating: number;
  message: string;
  approved: boolean;
  language: 'pt' | 'en';
  created_at?: string;
};
