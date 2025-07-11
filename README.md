# E-Commerce Final Project

A full-stack e-commerce platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) providing a complete online shopping experience with modern features and secure payment integration.

## 🚀 Live Demo

**Frontend:** [https://e-commerce-final-frontend.vercel.app/](https://e-commerce-final-frontend.vercel.app/)


## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Customer Features
- **User Authentication**: Secure registration and login system
- **Product Catalog**: Browse products with categories and filters
- **Search & Filter**: Advanced product search and filtering options
- **Shopping Cart**: Add, remove, and update cart items
- **Wishlist**: Save favorite products for later
- **Checkout Process**: Streamlined checkout with multiple payment options
- **Order Tracking**: Track order status and history
- **User Profile**: Manage personal information and addresses
- **Product Reviews**: Rate and review purchased products
- **Responsive Design**: Mobile-friendly interface

### Admin Features
- **Admin Dashboard**: Comprehensive admin panel with analytics
- **Product Management**: Add, edit, and delete products
- **Category Management**: Organize products into categories
- **Order Management**: Process and track customer orders
- **User Management**: Manage customer accounts
- **Inventory Management**: Track stock levels and manage inventory
- **Sales Analytics**: View sales reports and statistics
- **Content Management**: Manage banners, promotions, and site content

### Security Features
- **JWT Authentication**: Secure token-based authentication
- **Password Encryption**: bcrypt password hashing
- **Input Validation**: Server-side validation for all inputs
- **CORS Configuration**: Cross-origin resource sharing setup
- **Rate Limiting**: API rate limiting for security

## 🛠️ Tech Stack

**Frontend:**
- React.js
- React Router DOM
- Axios for API calls
- Context API for state management
- CSS3 & Bootstrap/Tailwind CSS
- React Hooks

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose ODM
- JWT for authentication
- bcrypt for password hashing
- Multer for file uploads
- Cors for cross-origin requests

**Database:**
- MongoDB Atlas

**Deployment:**
- Vercel (Frontend & Backend)
- MongoDB Atlas (Database)

## 📦 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14.0.0 or higher)
- npm or yarn package manager
- MongoDB (local installation or MongoDB Atlas account)
- Git

## 🔧 Installation

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ariful129/E-Commerce-Final.git
   cd E-Commerce-Final
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

4. **Start the backend server**
   ```bash
   npm start
   # or for development
   npm run dev
   ```

### Frontend Setup

1. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Set up environment variables**
   
   Create a `.env` file in the frontend directory:
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
   ```

3. **Start the frontend development server**
   ```bash
   npm start
   ```

## 🌐 Environment Variables

### Backend (.env)
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=30d

# Payment Gateway (if using Stripe)
STRIPE_SECRET_KEY=your-stripe-secret-key

# Email Configuration (if using email services)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
```

### Frontend (.env)
```env
# API Configuration
REACT_APP_API_URL=https://e-commerce-final-backend.vercel.app/api

# Payment Gateway
REACT_APP_STRIPE_PUBLIC_KEY=your-stripe-public-key

# Other configurations
REACT_APP_ENVIRONMENT=production
```

## 🎯 Usage

### For Customers
1. **Browse Products**: Visit the homepage to explore available products
2. **Register/Login**: Create an account or login to existing account
3. **Add to Cart**: Select products and add them to your shopping cart
4. **Checkout**: Complete your purchase with secure payment options
5. **Track Orders**: Monitor your order status in the user dashboard

### For Admins
1. **Admin Login**: Access the admin panel with admin credentials
2. **Manage Products**: Add new products, update existing ones, or remove products
3. **Process Orders**: View and update order statuses
4. **View Analytics**: Check sales reports and user statistics
5. **Manage Users**: View and manage customer accounts

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create new product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create new category (Admin)
- `PUT /api/categories/:id` - Update category (Admin)
- `DELETE /api/categories/:id` - Delete category (Admin)

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get single order
- `PUT /api/orders/:id` - Update order status (Admin)

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove item from cart

## 📁 Project Structure

```
E-Commerce-Final/
├── backend/
│   ├── controllers/          # Request handlers
│   ├── middleware/          # Custom middleware
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── utils/               # Utility functions
│   ├── uploads/             # File uploads
│   ├── server.js            # Main server file
│   └── package.json         # Backend dependencies
├── frontend/
│   ├── public/              # Public assets
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── context/         # Context providers
│   │   ├── hooks/           # Custom hooks
│   │   ├── services/        # API services
│   │   ├── utils/           # Utility functions
│   │   ├── App.js           # Main app component
│   │   └── index.js         # Entry point
│   └── package.json         # Frontend dependencies
└── README.md                # This file
```

## 📸 Screenshots

_Add screenshots of your application here to showcase the UI and features_

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contributing Guidelines
- Follow the existing code style
- Write descriptive commit messages
- Add tests for new features
- Update documentation as needed
- Ensure your code passes all tests

## 🐛 Known Issues

- List any known issues or limitations
- Mention any browser compatibility issues
- Note any features that are in development

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ariful Islam**
- GitHub: [@Ariful129](https://github.com/Ariful129)
- Email: [arif.cuet129@gmail.com](mailto:arif.cuet129@gmail.com)
- LinkedIn: [Connect with me](https://linkedin.com/in/your-profile)

## 🙏 Acknowledgments

- Thanks to all contributors who helped make this project possible
- Special thanks to the MERN stack community for excellent documentation
- Vercel for reliable hosting services
- MongoDB Atlas for database hosting
- Stripe for payment processing integration

## 📞 Support

If you encounter any issues or have questions about the project:

- 📧 Email: [arif.cuet129@gmail.com](mailto:arif.cuet129@gmail.com)
- 🐛 Issues: [GitHub Issues](https://github.com/Ariful129/E-Commerce-Final/issues)
- 📖 Documentation: Check the code comments and this README
- 💬 Discussions: [GitHub Discussions](https://github.com/Ariful129/E-Commerce-Final/discussions)

## 🔄 Version History

- **v1.0.0** - Initial release with core e-commerce features
- **v1.1.0** - Added payment integration and order tracking
- **v1.2.0** - Enhanced admin dashboard and analytics

## 🚀 Deployment

The project is deployed on Vercel with the following configuration:

- **Frontend**: Automatically deployed from the `frontend` directory
- **Backend**: Deployed as serverless functions
- **Database**: MongoDB Atlas for production database

For local deployment, refer to the installation instructions above.

---

⭐ **If you find this project helpful, please give it a star!** ⭐

## 📊 Project Status

🚧 **Status**: Active Development  
🔄 **Last Updated**: 2024  
📈 **Version**: 1.2.0
