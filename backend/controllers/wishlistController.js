import Wishlist from "../models/Wishlist.js";

// Get wishlist
export const getWishlist = async (req, res) => {
  let wishlist = await Wishlist.findOne({ user: req.user._id })
    .populate("items.product");

  if (!wishlist) {
    wishlist = await Wishlist.create({
      user: req.user._id,
      items: []
    });
  }

  res.json(wishlist);
};

// Add to wishlist
export const addToWishlist = async (req, res) => {
  const { productId } = req.body;

  let wishlist = await Wishlist.findOne({ user: req.user._id });

  if (!wishlist) {
    wishlist = await Wishlist.create({
      user: req.user._id,
      items: []
    });
  }

  const exists = wishlist.items.find(
    (item) => item.product.toString() === productId
  );

  if (!exists) {
    wishlist.items.push({ product: productId });
  }

  await wishlist.save();
  res.json(wishlist);
};

// Remove from wishlist
export const removeFromWishlist = async (req, res) => {
  const wishlist = await Wishlist.findOne({ user: req.user._id });

  if (!wishlist) {
    return res.status(404).json({ message: "Wishlist not found" });
  }

  wishlist.items = wishlist.items.filter(
    (item) => item.product.toString() !== req.params.productId
  );

  await wishlist.save();
  res.json(wishlist);
};