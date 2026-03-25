// Paradise Nursery Shopping Cart Application

// Product data with categories
const products = {
    "Indoor Plants": [
        {
            id: 1,
            name: "Monstera Deliciosa",
            price: 45.99,
            image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
            description: "Popular tropical plant with split leaves"
        },
        {
            id: 2,
            name: "Snake Plant",
            price: 25.99,
            image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
            description: "Low-maintenance air-purifying plant"
        },
        {
            id: 3,
            name: "Pothos",
            price: 18.99,
            image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
            description: "Easy-care trailing plant"
        }
    ],
    "Succulents": [
        {
            id: 4,
            name: "Aloe Vera",
            price: 12.99,
            image: "https://images.unsplash.com/photo-1509423290716-03f88655d4b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
            description: "Medicinal succulent with healing properties"
        },
        {
            id: 5,
            name: "Echeveria",
            price: 15.99,
            image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
            description: "Beautiful rosette-shaped succulent"
        },
        {
            id: 6,
            name: "Jade Plant",
            price: 22.99,
            image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
            description: "Hardy succulent with thick leaves"
        }
    ],
    "Tropical Plants": [
        {
            id: 7,
            name: "Bird of Paradise",
            price: 65.99,
            image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
            description: "Stunning tropical plant with orange flowers"
        },
        {
            id: 8,
            name: "Fiddle Leaf Fig",
            price: 55.99,
            image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
            description: "Trendy plant with large violin-shaped leaves"
        },
        {
            id: 9,
            name: "Peace Lily",
            price: 32.99,
            image: "https://images.unsplash.com/photo-1503021454445-3c77efc33b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
            description: "Elegant plant with white flowers"
        }
    ]
};

// Shopping cart data
let cart = JSON.parse(localStorage.getItem('paradiseNurseryCart')) || [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Load products if on products page
    if (document.getElementById('products-container')) {
        loadProducts();
    }
    
    // Load cart if on cart page
    if (document.getElementById('cart-items')) {
        loadCart();
    }
});

// Navigation functions
function navigateToProducts() {
    window.location.href = 'products.html';
}

function navigateToCart() {
    window.location.href = 'cart.html';
}

function navigateToHome() {
    window.location.href = 'index.html';
}

// Load products on the products page
function loadProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    
    for (const [category, categoryProducts] of Object.entries(products)) {
        const categorySection = document.createElement('div');
        categorySection.className = 'mb-12';
        
        const categoryHeader = document.createElement('h3');
        categoryHeader.className = 'category-header text-2xl font-bold text-gray-800 mb-6';
        categoryHeader.textContent = category;
        
        const productsGrid = document.createElement('div');
        productsGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
        
        categoryProducts.forEach(product => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
        });
        
        categorySection.appendChild(categoryHeader);
        categorySection.appendChild(productsGrid);
        container.appendChild(categorySection);
    }
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card bg-white rounded-lg shadow-md overflow-hidden';
    
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
        <div class="p-6">
            <h4 class="text-xl font-semibold text-gray-800 mb-2">${product.name}</h4>
            <p class="text-gray-600 mb-4">${product.description}</p>
            <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-green-600">$${product.price.toFixed(2)}</span>
                <button onclick="addToCart(${product.id})" class="btn-add-to-cart bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                    Add to Cart
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Add product to cart
function addToCart(productId) {
    const product = findProductById(productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    showToast(`${product.name} added to cart!`);
}

// Find product by ID
function findProductById(productId) {
    for (const categoryProducts of Object.values(products)) {
        const product = categoryProducts.find(p => p.id === productId);
        if (product) return product;
    }
    return null;
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('paradiseNurseryCart', JSON.stringify(cart));
}

// Update cart count in header
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('#cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
        element.classList.add('badge-update');
        setTimeout(() => element.classList.remove('badge-update'), 500);
    });
}

// Load cart items on cart page
function loadCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart');
    const cartActions = document.getElementById('cart-actions');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '';
        emptyCartMessage.style.display = 'block';
        cartActions.classList.add('hidden');
        updateCartSummary();
        return;
    }
    
    emptyCartMessage.style.display = 'none';
    cartActions.classList.remove('hidden');
    
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItem = createCartItem(item);
        cartItemsContainer.appendChild(cartItem);
    });
    
    updateCartSummary();
}

// Create cart item element
function createCartItem(item) {
    const cartItemDiv = document.createElement('div');
    cartItemDiv.className = 'cart-item bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row items-center gap-4';
    
    cartItemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="w-24 h-24 object-cover rounded-lg">
        <div class="flex-1">
            <h4 class="text-lg font-semibold text-gray-800">${item.name}</h4>
            <p class="text-gray-600">$${item.price.toFixed(2)} each</p>
        </div>
        <div class="flex items-center gap-2">
            <button onclick="updateQuantity(${item.id}, -1)" class="quantity-control w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-600 hover:text-white hover:border-green-600">
                -
            </button>
            <span class="w-12 text-center font-semibold">${item.quantity}</span>
            <button onclick="updateQuantity(${item.id}, 1)" class="quantity-control w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-600 hover:text-white hover:border-green-600">
                +
            </button>
        </div>
        <div class="text-right">
            <p class="text-lg font-bold text-gray-800">$${(item.price * item.quantity).toFixed(2)}</p>
            <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700 text-sm">
                Remove
            </button>
        </div>
    `;
    
    return cartItemDiv;
}

// Update item quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    saveCart();
    updateCartCount();
    loadCart();
}

// Remove item from cart
function removeFromCart(productId) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    loadCart();
    showToast(`${item.name} removed from cart`);
}

// Update cart summary
function updateCartSummary() {
    const totalItemsElement = document.getElementById('total-items');
    const totalPriceElement = document.getElementById('total-price');
    
    if (!totalItemsElement || !totalPriceElement) return;
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    totalItemsElement.textContent = totalItems;
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (confirm(`Checkout Summary:\n\nTotal Items: ${totalItems}\nTotal Price: $${totalPrice.toFixed(2)}\n\nProceed to checkout?`)) {
        cart = [];
        saveCart();
        updateCartCount();
        loadCart();
        showToast('Thank you for your order! Your plants are on their way!');
    }
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}
