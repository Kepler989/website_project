import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Product from "./models/Product.js";
import User from "./models/User.js";

dotenv.config();
connectDB();

await User.deleteMany();

await User.create({
  name: "Admin",
  email: "admin@test.com",
  password: "123456",
  isAdmin: true
});

const seedProducts = async () => {
  await Product.deleteMany();

  await Product.insertMany([
    {
      name: "Casio Edifice ECB2000SS",
      price: 25000,
      description: "Solar-powered chronograph",
      image: "/assets/casioecb2000ss.avif",
      rating: 4,
      category: "Edifice",
      stock: 10
    },
    {
      name: "Casio G-Shock DW-H5600",
      price: 8000,
      description: "Rugged digital watch",
      image: "/assets/casiodwh5600.avif",
      rating: 4,
      category: "G-Shock",
      stock: 15
    }
  ]);

  console.log("Products seeded");
  process.exit();
};

seedProducts();