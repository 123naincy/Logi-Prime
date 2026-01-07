/*
  # Warehouse Website Database Schema

  1. New Tables
    - `services`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `icon` (text)
      - `category` (text)
      - `features` (jsonb)
      - `created_at` (timestamptz)
      
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `created_at` (timestamptz)
      
    - `brands`
      - `id` (uuid, primary key)
      - `name` (text)
      - `logo_url` (text)
      - `created_at` (timestamptz)
      
    - `clients`
      - `id` (uuid, primary key)
      - `name` (text)
      - `logo_url` (text)
      - `industry` (text)
      - `created_at` (timestamptz)
      
    - `blogs`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `excerpt` (text)
      - `content` (text)
      - `image_url` (text)
      - `author` (text)
      - `published_at` (timestamptz)
      - `created_at` (timestamptz)
      
    - `gallery`
      - `id` (uuid, primary key)
      - `title` (text)
      - `image_url` (text)
      - `category` (text)
      - `created_at` (timestamptz)
      
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `company` (text)
      - `message` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public read access for content tables
    - Authenticated write access for contact submissions
*/

CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  icon text DEFAULT '',
  category text DEFAULT '',
  features jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS brands (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_url text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS clients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_url text DEFAULT '',
  industry text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS blogs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text DEFAULT '',
  content text DEFAULT '',
  image_url text DEFAULT '',
  author text DEFAULT '',
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS gallery (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  image_url text NOT NULL,
  category text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  company text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read services"
  ON services FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public can read categories"
  ON categories FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public can read brands"
  ON brands FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public can read clients"
  ON clients FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public can read blogs"
  ON blogs FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Public can read gallery"
  ON gallery FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  TO public
  WITH CHECK (true);