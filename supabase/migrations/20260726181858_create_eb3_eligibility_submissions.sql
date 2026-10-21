/*
# Create EB-3 eligibility submissions table

1. New Tables
- `eb3_eligibility_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) - Full name of the applicant
  - `email` (text, not null) - Contact email
  - `phone` (text, not null) - Contact phone/WhatsApp
  - `location` (text, nullable) - Current city/country of residence
  - `job_id` (text, nullable) - Identifier of the job the applicant is interested in
  - `job_title` (text, nullable) - Title of the job of interest (for reference)
  - `experience` (text, nullable) - Relevant work experience description
  - `english_level` (text, nullable) - Self-reported English proficiency
  - `education` (text, nullable) - Education level
  - `message` (text, nullable) - Additional notes from the applicant
  - `language` (text, default 'pt') - Submission language
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `eb3_eligibility_submissions`.
- Public INSERT (anon + authenticated) so visitors can submit the form.
- Authenticated SELECT/UPDATE for admin review management.
3. Notes
- This is a no-auth public submission form (no sign-in screen).
- INSERT is open to anon so the frontend can submit without login.
- SELECT/UPDATE restricted to authenticated (admin) to protect applicant PII.
*/

CREATE TABLE IF NOT EXISTS eb3_eligibility_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  location text,
  job_id text,
  job_title text,
  experience text,
  english_level text,
  education text,
  message text,
  language text DEFAULT 'pt',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE eb3_eligibility_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_eb3_submissions" ON eb3_eligibility_submissions;
CREATE POLICY "anon_insert_eb3_submissions"
ON eb3_eligibility_submissions FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_eb3_submissions" ON eb3_eligibility_submissions;
CREATE POLICY "auth_select_eb3_submissions"
ON eb3_eligibility_submissions FOR SELECT
TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_eb3_submissions" ON eb3_eligibility_submissions;
CREATE POLICY "auth_update_eb3_submissions"
ON eb3_eligibility_submissions FOR UPDATE
TO authenticated USING (true) WITH CHECK (true);
