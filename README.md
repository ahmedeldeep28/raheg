# Raheg Next.js E-commerce Website

This is a modern e-commerce web application built with [Next.js](https://nextjs.org/). The project features a clean UI, product catalog, shopping cart, order forms, blog, and contact functionality. It is designed for a honey and natural products business, but can be adapted for other use cases.

## Features

- Product listing and detail pages
- Shopping cart with context management
- Order and contact forms
- Blog section with article pages
- Responsive layout with custom and Bootstrap styles
- Error handling and API utilities

## Project Structure

```
components/         # Reusable UI components (cards, forms, layout)
context/            # React context for cart management
css/                # CSS files
pages/              # Next.js pages (routes)
public/             # Static assets (images, icons)
styles/             # Global and custom styles
utils/              # Utility functions (API handling)
next.config.js      # Next.js configuration
package.json        # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/ahmedeldeep28/raheg-api.git
   cd raheg
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Run the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `dev` - Start the development server
- `build` - Build for production
- `start` - Start the production server

## Customization

- Update product data, articles, and images in the respective folders.
- Modify styles in `styles/` and `css/` as needed.
