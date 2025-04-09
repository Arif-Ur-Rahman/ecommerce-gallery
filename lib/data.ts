export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    inStock: boolean;
  }
  
  export async function getProducts(): Promise<Product[]> {
    return [
      {
        id: "1",
        name: "Smartphone",
        description: "HuluLulu Smartphone with advanced camera features and 128GB storage",
        price: 599.99,
        category: "electronics",
        image: "/images/phone.png",
        inStock: true,
      },
      {
        id: "2",
        name: "Laptop",
        description: "HuluLulu Premium Laptop with 16GB RAM and 1TB SSD",
        price: 1299.99,
        category: "electronics",
        image: "/images/laptop.jpg",
        inStock: true,
      },
      {
        id: "3",
        name: "Headphones",
        description: "HuluLulu Wireless Noise-Cancelling Headphones with 30hr battery",
        price: 199.99,
        category: "electronics",
        image: "/images/headphones.jpg",
        inStock: true,
      },
      {
        id: "4",
        name: "Smart Watch",
        description: "Fitness tracker with heart rate monitor and GPS",
        price: 159.99,
        category: "electronics",
        image: "/images/watch.jpg",
        inStock: false,
      },
      {
        id: "5",
        name: "Cotton T-Shirt",
        description: "Premium quality cotton t-shirt in various colors",
        price: 24.99,
        category: "clothing",
        image: "/images/tshirt.jpg",
        inStock: true,
      },
      {
        id: "6",
        name: "Denim Jeans",
        description: "Slim fit jeans with stretch technology",
        price: 59.99,
        category: "clothing",
        image: "/images/jeans.jpg",
        inStock: true,
      },
      {
        id: "7",
        name: "Coffee Maker",
        description: "Automatic drip coffee machine with timer",
        price: 89.99,
        category: "home",
        image: "/images/coffee-maker.jpg",
        inStock: true,
      },
      {
        id: "8",
        name: "Yoga Mat",
        description: "Eco-friendly non-slip yoga mat",
        price: 29.99,
        category: "fitness",
        image: "/images/yoga-mat.jpg",
        inStock: true,
      },
      {
        id: "9",
        name: "Blender",
        description: "High-speed blender with 1000W motor",
        price: 79.99,
        category: "home",
        image: "/images/blender.png",
        inStock: false,
      },
      {
        id: "10",
        name: "Running Shoes",
        description: "Lightweight running shoes with cushion technology",
        price: 119.99,
        category: "fitness",
        image: "/images/Shoe.jpg",
        inStock: true,
      },
      {
        id: "11",
        name: "Backpack",
        description: "Water-resistant backpack with USB charging port",
        price: 49.99,
        category: "accessories",
        image: "/images/backpack.jpg",
        inStock: true,
      },
      {
        id: "12",
        name: "Desk Lamp",
        description: "LED desk lamp with adjustable brightness",
        price: 39.99,
        category: "home",
        image: "/images/jeans.jpg",
        inStock: true,
      }
    ];
  }