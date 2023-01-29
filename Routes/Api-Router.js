const express = require("express");
const locationlist = require("../controllers/locationsController");
const Restaurantdetails = require("../controllers/RestaurantsController")
const MealList = require("../controllers/MealTypeController")
const MenuItem = require("../controllers/MenuItemsController")
const User = require("../controllers/UserController")
const Payment = require("../controllers/PaymentController")

const Router = express.Router();

Router.get("/api/home",locationlist.home);
Router.get("/api/get-Restaurants",Restaurantdetails.getRestaurantDetails);
Router.get("/api/get-Restaurant-by-location-id/:loc_id",Restaurantdetails.getRestaurantByLocID);
Router.get("/api/get-Restaurant-by-id/:_id",Restaurantdetails.getRestaurantByID);
Router.get("/api/get-Location",locationlist.LocationsDetails);
Router.get("/api/get-mealType",MealList.getMealDetails);
Router.get("/api/get-menu-items-by-restaurant-id/:Rest_Id",MenuItem.getMenuItemsByRestID);

Router.post("/api/Login",User.Login)
Router.post("/api/Sign-up",User.SignUp)
Router.post("/api/filter",Restaurantdetails.filterData)

Router.post("/api/payment/gen-order",Payment.getOrderID)
Router.post("/api/payment/verify",Payment.verifyPayment )

module.exports = Router;