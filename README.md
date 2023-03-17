
<h1 align="center">  🛒 &nbsp; GoodWire - Goods for Women  🛒 </h1>

> Built with MERN stack (MongoDB, Express, React and Node).

> Shopping App, for our University Women and the development and employment of local distributors/sellers.

## 📜 &nbsp; Table of contents

- [Main Features](#--main-features)
- [Technologies](#--technologies)
- [Key Concepts](#--key-concepts)
- [UML Diagram](#--uml-diagram)
- [Setup](#--setup)
- [ENV](#-ENV)

## 🚩 &nbsp; Main Features

> This App was made to track the order state since the customer place it
> once it's shipped the seller mark it as shipped, and then the Admin mark it as delivered.

#### Project methodology

- **Register and signin system**
  - Everyone is registered as a customer.
  - One Admin is already registered which controls the functioning of the webApp
  - Admin only created by the Admin.
  - Admins can create any other admins.
  - Aunenticated roles
  - Forgot, reset password through mail
- **Product life cycle**
  - A seller/Admin add a product.
  - A customer order some products, number in stock decreases.
  - The customer tracks the order's state since it's placed. 
  - The shipper pick the product, the seller mark it as shipped.
  - The shipper deliver the order, and mark it as delivered.
  - The customer may want to turn it back (to be done).
- **Other facilities**
  - Users can edit their account info. 
  - Users can track their order's state. 
  - Users can add, delete or edit addresses. 
  - Users can have a wishlist with any amount of products. 

#### Users roles - 

- **Customer**
  - Sign up & login.
  - Purchase order of any amount of products.
  - Choose different category/ratings/amt to search the product.
  - Add Reviews and Ratings to the product.
  - Tracking order state. 
  - Return order (To do).
- **Admin** -> all above plus
  - Add, Edit and Delete categories.
  - Add, Edit and Delete any products.
  - Create other Admins.
  - CRUD operations for products, users, orders, reviews
  - Filtering/sorting of products/users/orders/reviews.
  - Restrict any user from all the permissions.

## 💹 &nbsp; Technologies

> Project is created with:
#### Backend

- Express
- Mongoose
- Json Web Token (For authentication)
- bcryptjs (for data encryption)

#### Frontend

- React JS
- Redux (Manage app state)
- React-router (To handle routing)
- Axios (For http requests)
- React-toastify (To handle success and error message)
- Sass

## 💡 &nbsp; Key Concepts

- MVC (Model-View-Controller)
- CRUD operations
- Authentication system
- Encrypting passwords
- Images handling using cloudinary
- OOP (Object Oriented Programming)

## 📈 &nbsp; UML Diagram

> 




