/*
  # Initial Schema Setup for Lozo's LotoFair

  1. Tables
    - content: Stores website content (text, links, HTML)
    - social_links: Stores social media links and metadata
    - images: Stores image metadata and URLs

  2. Security
    - Enable RLS on all tables
    - Add policies for admin access
*/

-- Create content table
CREATE TABLE IF NOT EXISTS content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  value text NOT NULL,
  type text NOT NULL CHECK (type IN ('text', 'link', 'html')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create social_links table
CREATE TABLE IF NOT EXISTS social_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform text NOT NULL,
  url text NOT NULL,
  icon text NOT NULL,
  position text NOT NULL CHECK (position IN ('top', 'bottom')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create images table
CREATE TABLE IF NOT EXISTS images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url text NOT NULL,
  alt_text text,
  section text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE content ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE images ENABLE ROW LEVEL SECURITY;

-- Policies for content table
CREATE POLICY "Allow public read access" ON content
  FOR SELECT USING (true);

CREATE POLICY "Allow admin full access" ON content
  FOR ALL TO authenticated
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM auth.users WHERE is_admin = true))
  WITH CHECK (auth.jwt() ->> 'email' IN (SELECT email FROM auth.users WHERE is_admin = true));

-- Policies for social_links table
CREATE POLICY "Allow public read access" ON social_links
  FOR SELECT USING (true);

CREATE POLICY "Allow admin full access" ON social_links
  FOR ALL TO authenticated
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM auth.users WHERE is_admin = true))
  WITH CHECK (auth.jwt() ->> 'email' IN (SELECT email FROM auth.users WHERE is_admin = true));

-- Policies for images table
CREATE POLICY "Allow public read access" ON images
  FOR SELECT USING (true);

CREATE POLICY "Allow admin full access" ON images
  FOR ALL TO authenticated
  USING (auth.jwt() ->> 'email' IN (SELECT email FROM auth.users WHERE is_admin = true))
  WITH CHECK (auth.jwt() ->> 'email' IN (SELECT email FROM auth.users WHERE is_admin = true));