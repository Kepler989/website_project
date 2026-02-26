<img width="2886" height="1662" alt="image" src="https://github.com/user-attachments/assets/cc7ab82e-59a2-496e-8805-e3e735e1dd82" />
  
# Full Stack E-Commerce website-project  
  
This is a full-stack e-commerce website hosting various watches for sale. This project is built using MongoDB, and Node.js. For the security part the website makes use of the JWT authentication. The server-side handles operations like adding items to the cart and to the wishlist and removing the items from the cart and wishlist or sending the items from the wishlist to the cart and a checkout feature for the products in the cart by calculating the final price of the products with any discounts for any valid coupon codes if entered.  

---  

## Tech Stack:  
-HTML  
-CSS  
-JavaScript  

### Backend:-
-Node.js  
-Express.js  
  
### Database:-  
-MongoDB  
-Mongoose  
  
### Authentication and Security:-  
-bycript  
-JWT  
  
### Developement Tools:-  
-Nodemon  
-Morgan  
-CORS  

---
  
## Project-Structure:  
```text
project-root/
│
├── models/
│   ├── User.js
│   ├── Product.js
│   ├── Cart.js
│   ├── Wishlist.js
│   └── Order.js
│
├── controllers/
│   ├── authController.js
│   ├── productController.js
│   ├── cartController.js
│   ├── wishlistController.js
│   └── orderController.js
│
├── routes/
│   ├── authRoutes.js
│   ├── productRoutes.js
│   ├── cartRoutes.js
│   ├── wishlistRoutes.js
│   └── orderRoutes.js
│
├── assets/
│
├── node_modules/
├── package.json
└── server.js / index.js
```

---

## Installation and setup:  
  
1.*Clone the repository:*  
```bash
git clone <your-repo-link>  
cd <project-folder>
```
  
2.*Install dependencies:*  
```bash
npm install
```  
  
3.*Setup environment variables:*
```bash
PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key
```
  
4.*Run the server:*
```bash
Development:npm run dev  
Production:npm start
```  

---
  
## Author:  
Swayamsiddha Mohapatra-swayamsiddhamohapatra769@gmail.com
