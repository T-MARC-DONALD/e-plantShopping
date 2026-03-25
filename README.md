# Paradise Nursery - Houseplant Shopping Application

A modern React-based web application for browsing and purchasing houseplants online. Built with React, Redux, and modern CSS, featuring a complete shopping cart system with state management.

## Project Overview

Paradise Nursery is a comprehensive e-commerce application that allows users to browse houseplants across multiple categories, add items to a shopping cart, and manage their purchases with a fully functional cart system.

## Features

### 🌿 Three Complete Pages
- **Landing Page**: Beautiful hero section with company information and call-to-action
- **Product Listing Page**: Browse 24+ houseplants across 3 categories (8 plants per category)
- **Shopping Cart Page**: Full cart management with item controls and checkout

### 🛒 Advanced Shopping Cart Functionality
- Redux state management for cart operations
- Add items to cart with button disable after adding
- Dynamic cart icon with real-time item count updates
- Increase/decrease item quantities with price recalculation
- Remove items from cart
- Persistent cart state during session
- Calculate total items, subtotal, tax, and final total
- Checkout with "Coming Soon" notification

### 🎨 Modern Design
- Responsive design for all screen sizes
- Custom CSS with Tailwind-inspired utility classes
- Smooth animations and transitions
- Hover effects and micro-interactions
- Professional green/nature themed color scheme

### 📱 User Experience
- Intuitive navigation between pages
- Clear product information with high-quality images
- Accessible buttons and controls
- Empty cart state with call-to-action
- Mobile-optimized layout

## Technical Implementation

### Technologies Used
- **React 18**: Modern React with hooks and functional components
- **Redux Toolkit**: State management for shopping cart
- **React Router**: Client-side routing and navigation
- **CSS3**: Custom styling with responsive design
- **Unsplash API**: High-quality plant images

### Project Structure
```
paradise-nursery/
├── public/
│   └── index.html
├── src/
│   ├── App.css              # Main application styles with background image
│   ├── App.jsx              # Main App component with routing
│   ├── AboutUs.jsx          # Company information page
│   ├── CartItem.jsx         # Shopping cart page component
│   ├── CartSlice.jsx        # Redux slice for cart state management
│   ├── index.css            # Global styles
│   ├── index.js             # Application entry point
│   ├── LandingPage.jsx      # Landing page component
│   ├── Navbar.jsx           # Navigation component with cart icon
│   ├── ProductList.jsx      # Product listing with 24+ plants
│   └── store.js             # Redux store configuration
├── package.json
└── README.md
```

### Key Components

#### App.jsx
- Main application component with React Router setup
- Redux Provider integration
- Route definitions for all pages

#### App.css
- Landing page background image implementation
- Complete styling for all components
- Responsive design patterns
- Animation and transition effects

#### AboutUs.jsx
- Detailed company information
- Mission statement and values
- Company history and commitment
- Professional about page layout

#### CartSlice.jsx
- Redux slice for shopping cart state management
- Actions: addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart
- Automatic total calculation and item counting
- Persistent cart state

#### ProductList.jsx
- 24+ houseplants across 3 categories (Indoor Plants, Succulents, Tropical Plants)
- 8 plants per category as required
- Add to Cart buttons with disable functionality
- Dynamic cart icon count updates
- Responsive grid layout

#### CartItem.jsx
- Complete shopping cart interface
- Item thumbnails, names, and unit prices
- Quantity increase/decrease controls
- Delete functionality for each item
- Total cart amount calculation
- Tax calculation (8%)
- Checkout button with "Coming Soon" message
- Continue shopping button linking back to products

#### Navbar.jsx
- Navigation links: Home, Plants, About, Cart
- Dynamic cart icon with item count
- Responsive navigation design

## Getting Started

### Prerequisites
- Node.js 14+ installed
- Git installed

### Installation
1. Clone this repository
2. Navigate to project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
```bash
npm start
```
The application will open in your default browser at `http://localhost:3000`

### Building for Production
```bash
npm run build
```

## Features Compliance

### ✅ Task 1: README.md
- Complete project documentation with all required details

### ✅ Task 2: AboutUs.jsx
- Detailed company information including mission, history, and values

### ✅ Task 3: App.css
- Background image implementation for landing page
- Complete styling for all components

### ✅ Task 4: App.jsx
- Landing page with company name and "Get Started" button
- React Router setup for navigation

### ✅ Task 5: CartSlice.jsx
- Complete Redux slice implementation
- All cart operations with state management

### ✅ Task 6: ProductList.jsx
- 6+ unique houseplants per category (8 per category)
- 3+ categories (Indoor Plants, Succulents, Tropical Plants)
- Add to Cart buttons with disable functionality
- Navbar with Home, Plants, and Cart links
- Dynamic cart icon with total item count

### ✅ Task 7: CartItem.jsx
- Total cart amount display
- Total cost per plant in cart
- Thumbnails, names, and unit prices for each plant
- Increase/decrease quantity buttons
- Delete button for each item
- Checkout button with "Coming Soon" message
- Continue shopping button linking back to products

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `paradise-nursery`
3. Make it public (required for GitHub Pages)

### Step 2: Update package.json
Update the `homepage` field in package.json:
```json
"homepage": "https://yourusername.github.io/paradise-nursery"
```

### Step 3: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 4: Add deployment scripts
Add these scripts to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```

### Step 5: Deploy to GitHub Pages
```bash
npm run deploy
```

Your site will be available at:
`https://yourusername.github.io/paradise-nursery/`

## Browser Compatibility

This application works on all modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance Features

- React 18 with concurrent features
- Redux Toolkit for efficient state management
- Optimized re-renders with React hooks
- Responsive images with proper sizing
- CSS animations using transform for better performance

## Future Enhancements

Potential features to add:
- Product detail pages
- User authentication
- Order history
- Payment processing integration
- Product reviews and ratings
- Advanced search and filtering
- Wishlist functionality
- Admin panel for product management

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Plant Shopping! 🌱**
