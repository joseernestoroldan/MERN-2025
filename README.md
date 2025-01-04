
## Backend

The backend is built using Node.js, Express, and MongoDB.

### Configuration

- **Database Configuration**: The database connection is configured in [backend/config/db.js](backend/config/db.js).
- **Environment Variables**: The environment variables are stored in the `.env` file.

### Models

- **Product Model**: The product schema is defined in [backend/models/products.model.js](backend/models/products.model.js).

### Controllers

- **Product Controller**: The product controller handles CRUD operations and is defined in [backend/controllers/products.controller.js](backend/controllers/products.controller.js).

### Routes

- **Product Routes**: The product routes are defined in [backend/routes/products.route.js](backend/routes/products.route.js).

### Server

- **Server Setup**: The server setup and middleware configuration are defined in [backend/server.js](backend/server.js).

## Frontend

The frontend is built using React and Vite.

### Configuration

- **ESLint Configuration**: The ESLint configuration is defined in [frontend/eslint.config.js](frontend/eslint.config.js).
- **Vite Configuration**: The Vite configuration is defined in [frontend/vite.config.js](frontend/vite.config.js).

### Components

- **App Component**: The main application component is defined in [frontend/src/App.jsx](frontend/src/App.jsx).
- **Navbar Component**: The navigation bar component is defined in [frontend/src/components/Navbar.jsx](frontend/src/components/Navbar.jsx).
- **ProductCard Component**: The product card component is defined in [frontend/src/components/ProductCard.jsx](frontend/src/components/ProductCard.jsx).
- **Modal Component**: The modal component for updating products is defined in [frontend/src/components/Modal.jsx](frontend/src/components/Modal.jsx).
- **UI Components**: Various UI components are defined in the [frontend/src/components/ui](frontend/src/components/ui) directory.

### Pages

- **HomePage**: The home page component is defined in [frontend/src/pages/HomePage.jsx](frontend/src/pages/HomePage.jsx).
- **CreatePage**: The create product page component is defined in [frontend/src/pages/CreatePage.jsx](frontend/src/pages/CreatePage.jsx).

### Store

- **Product Store**: The product store using Zustand is defined in [frontend/src/store/product.js](frontend/src/store/product.js).

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/joseernestoroldan/MERN-2025.git
    cd joseernestoroldan
    ```

2. Install backend dependencies:
    ```sh
    npm install
    ```

3. Install frontend dependencies:
    ```sh
    cd frontend
    npm install
    cd ..
    ```

4. Create a [.env](http://_vscodecontentref_/24) file in the root directory and add your MongoDB URI and port:
    ```env
    MONGO_URI=<your-mongodb-uri>
    PORT=5000
    ```

### Running the Application

1. Start the backend server:
    ```sh
    npm run dev
    ```

2. Start the frontend development server:
    ```sh
    cd frontend
    npm run dev
    ```

### Building for Production

1. Build the frontend:
    ```sh
    npm run build
    ```

2. Start the production server:
    ```sh
    npm start
    ```

## License

This project is property code2steps and can be used freely. 
