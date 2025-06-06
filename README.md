# E-Commerce Product Gallery

A modern e-commerce product gallery with shopping cart functionality built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🛍️ Product listing with filtering by:
  - Category
  - Price range
  - Availability
- 🔍 Sorting options (price, alphabetical)
- 🛒 Shopping cart functionality:
  - Add/remove items
  - Quantity adjustment
  - Local storage persistence
- 📱 Fully responsive design
- ✨ Instant feedback with toast notifications
- 🎨 Professional purple-themed UI

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS with custom theme
- **State Management**: React Context API
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Type Safety**: TypeScript

## Setup Instructions

### Prerequisites
- Node.js 18+
- npm/yarn/pnpm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ecommerce-gallery.git
Install dependencies:

bash
Copy
npm install
Start development server:

bash
Copy
npm run dev
Open http://localhost:3000 in your browser

Technical Decisions
Architecture
App Router: Chosen for modern React features and better performance

Client Components: Used only where necessary (cart, filters)

Server Components: Maximized for product listing page

State Management
Context API: Selected over Redux for simpler cart management

Local Storage: Persists cart between sessions

Performance
Image Optimization: Next.js Image component with responsive sizes

Code Splitting: Automatic with Next.js

Lazy Loading: Implemented for non-critical components

Assumptions
Product data is static (can be replaced with API calls)

No user authentication required

Single currency (USD) for all products

Mobile-first design approach

Modern browsers support (Chrome, Firefox, Safari latest)

Future Improvements
Immediate
Product search functionality

Product detail pages

Checkout process

Mid-term
User authentication

Product reviews

Wishlist feature

Long-term
Payment integration

Admin dashboard

Multi-language support