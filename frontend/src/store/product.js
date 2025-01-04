import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    // Validación de entrada
    if (!newProduct.name || typeof newProduct.name !== "string") {
      return { success: false, message: "Invalid or missing product name." };
    }
    if (
      !newProduct.price ||
      typeof newProduct.price !== "string" ||
      parseFloat(newProduct.price) <= 0
    ) {
      return { success: false, message: "Invalid or missing product price." };
    }
    if (!newProduct.image || typeof newProduct.image !== "string") {
      return {
        success: false,
        message: "Invalid or missing product image URL.",
      };
    }

    try {
      // Llamada a la API
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      // Verificación de la respuesta
      if (!res.ok) {
        const errorData = await res.json();
        return {
          success: false,
          message: errorData.message || "Failed to create product.",
        };
      }

      const data = await res.json();

      // Actualización del estado
      set((state) => ({ products: [...state.products, data] }));

      return { success: true, message: "Product Created Successfully." };
    } catch (error) {
      // Manejo de errores de red
      console.error("Error creating product:", error);
      return {
        success: false,
        message: "An error occurred while creating the product.",
      };
    }
  },
  fetchProducts: async () => {
    try {
      // Llamada a la API
      const res = await fetch("http://localhost:5000/api/products");

      // Verificación de la respuesta
      if (!res.ok) {
        const errorData = await res.json();
        return { success: false, message: "Failed to fetch products." };
      }

      const data = await res.json();

      // Actualización del estado
      set({ products: data.data });

      return { success: true, message: "Products Fetched Successfully." };
    } catch (error) {
      // Manejo de errores de red
      console.error("Error fetching products:", error);
      return {
        success: false,
        message: "An error occurred while fetching the products.",
      };
    }
  },
  deleteProduct: async (productId) => {
    const res = await fetch(`http://localhost:5000/api/products/${productId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    set((state) => ({
      products: state.products.filter((product) => product._id !== productId)
    }));
    return {success: true, message: data.message}
  },
  updateProduct: async (productId, updatedProduct) => {
    const res = await fetch(`http://localhost:5000/api/products/${productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    set((state) => ({
      products: state.products.map((product) =>
        product._id === productId ? data.data : product
      ),
    }));
    return { success: true, message: data.message };
  }
}));
