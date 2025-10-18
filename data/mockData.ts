
import type { Product, Category } from '../types';

export const categories: Category[] = [
  { id: 'e-commerce', name: 'E-commerce' },
  { id: 'portfolio', name: 'Portfolio' },
  { id: 'dashboard', name: 'Dashboard' },
  { id: 'mobile-app', name: 'Mobile App' },
  { id: 'landing-page', name: 'Landing Page' },
  { id: 'saas', name: 'SaaS' },
  { id: 'blog', name: 'Blog' },
  { id: 'social-media', name: 'Social Media' },
  { id: 'booking', name: 'Booking' },
  { id: 'real-estate', name: 'Real Estate' },
];

export const products: Product[] = [
  { id: 1, name: 'Modern E-commerce Kit', category: 'e-commerce', price: 79.99, rating: 5, imageUrl: 'https://picsum.photos/seed/ecom1/600/400', description: 'A sleek and modern UI kit for any e-commerce platform.' },
  { id: 2, name: 'Minimalist Online Store', category: 'e-commerce', price: 59.99, rating: 4, imageUrl: 'https://picsum.photos/seed/ecom2/600/400', description: 'Clean and simple design to put your products front and center.' },
  { id: 3, name: 'Creative Portfolio Template', category: 'portfolio', price: 49.99, rating: 5, imageUrl: 'https://picsum.photos/seed/folio1/600/400', description: 'Showcase your work with this stylish and creative portfolio.' },
  { id: 4, name: 'Developer Portfolio', category: 'portfolio', price: 39.99, rating: 4, imageUrl: 'https://picsum.photos/seed/folio2/600/400', description: 'A dark-mode ready portfolio for developers and engineers.' },
  { id: 5, name: 'Data Viz Dashboard', category: 'dashboard', price: 129.99, rating: 5, imageUrl: 'https://picsum.photos/seed/dash1/600/400', description: 'Advanced components for building powerful data visualizations.' },
  { id: 6, name: 'Admin Panel UI', category: 'dashboard', price: 99.99, rating: 5, imageUrl: 'https://picsum.photos/seed/dash2/600/400', description: 'A complete admin panel with charts, tables, and widgets.' },
  { id: 7, name: 'Finance Mobile App', category: 'mobile-app', price: 89.99, rating: 4, imageUrl: 'https://picsum.photos/seed/mob1/600/400', description: 'UI kit for a fintech or banking mobile application.' },
  { id: 8, name: 'Social Mobile App', category: 'mobile-app', price: 79.99, rating: 5, imageUrl: 'https://picsum.photos/seed/mob2/600/400', description: 'Connect people with this feature-rich social media app UI.' },
  { id: 9, name: 'SaaS Landing Page', category: 'landing-page', price: 39.99, rating: 5, imageUrl: 'https://picsum.photos/seed/land1/600/400', description: 'High-conversion landing page template for your SaaS product.' },
  { id: 10, name: 'Startup Landing Page', category: 'landing-page', price: 45.99, rating: 4, imageUrl: 'https://picsum.photos/seed/land2/600/400', description: 'A vibrant and engaging landing page to launch your startup.' },
  { id: 11, 'name': 'CRM SaaS Platform', 'category': 'saas', 'price': 149.99, 'rating': 5, 'imageUrl': 'https://picsum.photos/seed/saas1/600/400', description: 'Full UI kit for a Customer Relationship Management application.' },
  { id: 12, 'name': 'Project Management SaaS', 'category': 'saas', 'price': 139.99, 'rating': 4, 'imageUrl': 'https://picsum.photos/seed/saas2/600/400', description: 'Organize tasks and teams with this intuitive project management UI.' },
  { id: 13, 'name': 'Minimalist Blog Theme', 'category': 'blog', 'price': 29.99, 'rating': 5, 'imageUrl': 'https://picsum.photos/seed/blog1/600/400', description: 'A content-focused, clean blog template.' },
  { id: 14, 'name': 'Travel Blog UI Kit', 'category': 'blog', 'price': 35.99, 'rating': 4, 'imageUrl': 'https://picsum.photos/seed/blog2/600/400', description: 'Visually stunning UI for travel bloggers and storytellers.' },
  { id: 15, 'name': 'Photo Sharing App UI', 'category': 'social-media', 'price': 69.99, 'rating': 5, 'imageUrl': 'https://picsum.photos/seed/social1/600/400', description: 'A complete UI kit for a modern photo sharing social network.' },
  { id: 16, 'name': 'Hotel Booking System', 'category': 'booking', 'price': 99.99, 'rating': 5, 'imageUrl': 'https://picsum.photos/seed/book1/600/400', description: 'Elegant and user-friendly hotel booking interface.' },
  { id: 17, 'name': 'Flight Booking UI', 'category': 'booking', 'price': 109.99, 'rating': 4, 'imageUrl': 'https://picsum.photos/seed/book2/600/400', description: 'A comprehensive UI kit for flight booking applications.' },
  { id: 18, 'name': 'Luxury Real Estate Site', 'category': 'real-estate', 'price': 89.99, 'rating': 5, 'imageUrl': 'https://picsum.photos/seed/estate1/600/400', description: 'Premium design for high-end real estate listings.' },
  { id: 19, 'name': 'Real Estate Marketplace', 'category': 'real-estate', 'price': 119.99, 'rating': 4, 'imageUrl': 'https://picsum.photos/seed/estate2/600/400', description: 'A complete marketplace for buying, selling, and renting properties.' },
  { id: 20, 'name': 'Analytics Dashboard Pro', 'category': 'dashboard', 'price': 159.99, 'rating': 5, 'imageUrl': 'https://picsum.photos/seed/dash3/600/400', description: 'A powerful dashboard for deep data analysis and reporting.' }
];
