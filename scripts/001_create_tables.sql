-- Create portfolio items table
create table if not exists public.portfolio_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  image_url text not null,
  category text not null,
  display_order integer default 0,
  created_at timestamp with time zone default now()
);

-- Create services table
create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  price text,
  features text[] default array[]::text[],
  display_order integer default 0,
  created_at timestamp with time zone default now()
);

-- Create testimonials table
create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  content text not null,
  image_url text,
  rating integer default 5,
  display_order integer default 0,
  created_at timestamp with time zone default now()
);

-- Create blog posts table
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  excerpt text,
  image_url text not null,
  author text default 'Kaplong Creative',
  published_at timestamp with time zone default now(),
  created_at timestamp with time zone default now()
);

-- Create site content table for hero text, about text, etc.
create table if not exists public.site_content (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  value text not null,
  updated_at timestamp with time zone default now()
);

-- Enable RLS on all tables (public access for reading, admin only for writing)
alter table public.portfolio_items enable row level security;
alter table public.services enable row level security;
alter table public.testimonials enable row level security;
alter table public.blog_posts enable row level security;
alter table public.site_content enable row level security;

-- Allow public read access
create policy "Allow public read access to portfolio_items"
  on public.portfolio_items for select
  using (true);

create policy "Allow public read access to services"
  on public.services for select
  using (true);

create policy "Allow public read access to testimonials"
  on public.testimonials for select
  using (true);

create policy "Allow public read access to blog_posts"
  on public.blog_posts for select
  using (true);

create policy "Allow public read access to site_content"
  on public.site_content for select
  using (true);

-- Allow authenticated users to manage all content
create policy "Allow authenticated users to insert portfolio_items"
  on public.portfolio_items for insert
  to authenticated
  with check (true);

create policy "Allow authenticated users to update portfolio_items"
  on public.portfolio_items for update
  to authenticated
  using (true);

create policy "Allow authenticated users to delete portfolio_items"
  on public.portfolio_items for delete
  to authenticated
  using (true);

create policy "Allow authenticated users to insert services"
  on public.services for insert
  to authenticated
  with check (true);

create policy "Allow authenticated users to update services"
  on public.services for update
  to authenticated
  using (true);

create policy "Allow authenticated users to delete services"
  on public.services for delete
  to authenticated
  using (true);

create policy "Allow authenticated users to insert testimonials"
  on public.testimonials for insert
  to authenticated
  with check (true);

create policy "Allow authenticated users to update testimonials"
  on public.testimonials for update
  to authenticated
  using (true);

create policy "Allow authenticated users to delete testimonials"
  on public.testimonials for delete
  to authenticated
  using (true);

create policy "Allow authenticated users to insert blog_posts"
  on public.blog_posts for insert
  to authenticated
  with check (true);

create policy "Allow authenticated users to update blog_posts"
  on public.blog_posts for update
  to authenticated
  using (true);

create policy "Allow authenticated users to delete blog_posts"
  on public.blog_posts for delete
  to authenticated
  using (true);

create policy "Allow authenticated users to insert site_content"
  on public.site_content for insert
  to authenticated
  with check (true);

create policy "Allow authenticated users to update site_content"
  on public.site_content for update
  to authenticated
  using (true);

create policy "Allow authenticated users to delete site_content"
  on public.site_content for delete
  to authenticated
  using (true);
