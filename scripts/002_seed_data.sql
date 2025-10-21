-- Insert initial portfolio items
insert into public.portfolio_items (title, description, image_url, category, display_order) values
('Elegant Garden Wedding', 'A beautiful outdoor ceremony surrounded by nature', 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop', 'Weddings', 1),
('Romantic Beach Ceremony', 'Sunset vows by the ocean', 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop', 'Weddings', 2),
('Classic Church Wedding', 'Traditional elegance and timeless moments', 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop', 'Weddings', 3),
('Intimate Countryside Wedding', 'Rustic charm in a pastoral setting', 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop', 'Weddings', 4),
('Modern City Wedding', 'Urban sophistication meets romance', 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop', 'Weddings', 5),
('Destination Wedding', 'Love stories in exotic locations', 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop', 'Weddings', 6);

-- Insert initial services
insert into public.services (title, description, price, features, display_order) values
('Full Day Coverage', 'Complete wedding day photography from preparation to reception', 'From KSh 80,000', array['8-10 hours coverage', 'Two photographers', '500+ edited photos', 'Online gallery', 'Print rights'], 1),
('Half Day Package', 'Perfect for intimate ceremonies and smaller celebrations', 'From KSh 50,000', array['4-5 hours coverage', 'One photographer', '300+ edited photos', 'Online gallery', 'Print rights'], 2),
('Engagement Session', 'Capture your love story before the big day', 'From KSh 25,000', array['2 hours coverage', 'Multiple locations', '100+ edited photos', 'Online gallery', 'Print rights'], 3);

-- Insert initial testimonials
insert into public.testimonials (name, role, content, image_url, rating, display_order) values
('Sarah & James', 'Wedding Couple', 'Kaplong captured our special day perfectly! Every moment was beautifully documented, and we couldn''t be happier with the results.', 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=100&h=100&fit=crop', 5, 1),
('Emily & Michael', 'Wedding Couple', 'Professional, creative, and so easy to work with. Our photos are absolutely stunning!', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', 5, 2),
('Grace & David', 'Wedding Couple', 'The attention to detail and artistic vision exceeded all our expectations. Highly recommended!', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', 5, 3);

-- Insert initial blog posts
insert into public.blog_posts (title, content, excerpt, image_url, author) values
('10 Tips for Your Perfect Wedding Day', 'Planning your wedding day photography? Here are our top tips to ensure everything goes smoothly...', 'Essential advice for couples planning their wedding photography', 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop', 'Kaplong Creative'),
('Choosing Your Wedding Venue', 'The venue sets the tone for your entire wedding. Here''s what to consider when making this important decision...', 'A guide to selecting the perfect location for your special day', 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop', 'Kaplong Creative'),
('Engagement Photo Ideas', 'Make your engagement session memorable with these creative ideas and locations...', 'Inspiration for your pre-wedding photoshoot', 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop', 'Kaplong Creative');

-- Insert initial site content
insert into public.site_content (key, value) values
('hero_title', 'Capturing Love Stories'),
('hero_subtitle', 'Professional Wedding Photography in Kenya'),
('hero_description', 'We specialize in capturing the authentic moments and emotions that make your wedding day uniquely yours.'),
('about_intro', 'Welcome to Kaplong Creative Studio, where we believe every love story deserves to be told beautifully.'),
('about_description', 'With years of experience in wedding photography, we specialize in capturing the genuine emotions, intimate moments, and joyful celebrations that make your day uniquely yours.');
