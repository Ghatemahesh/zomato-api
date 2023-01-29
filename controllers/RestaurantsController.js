const { request } = require("express");
const RestaurantList = require("../models/restaurantModel");

module.exports.getRestaurantDetails = async (req, res) => {
  try {
    let result = await RestaurantList.find();
    res.status(200).send({
      status: true,
      result,
    });
  } catch {
    res.status(500).send({
      status: false,
      message: "this is not available",
    });
  }
};

module.exports.getRestaurantByLocID = async (req, res) => {
  try {
    let Loc_id = req.params.loc_id;
    let Result = await RestaurantList.find({ location_id: Loc_id });
    res.status(200).send({
      status: true,
      Result,
    });
  } catch {
    res.status(500).send({
      status: false,
      message: "this is not available",
    });
  }
};

module.exports.getRestaurantByID = async (req, res) => {
  try {
    let Id = req.params._id;
    let result = await RestaurantList.findOne({ _id: Id });
    res.status(200).send({
      status: true,
      result,
    });
  } catch {
    res.status(500).send({
      status: false,
      message: "this is not available",
    });
  }
};

module.exports.filterData = async (req, res) => {
  let { meal_type, location, cuisine, hcost, lcost, sort, page } = req.body;

  page = page === undefined ? 1 : page;
  let perPage = 2;

  let startIndex = page * perPage - perPage;
  let endIndex = page * perPage;

  const filter = {};

  sort = sort === undefined ? 1 : sort;

  if (meal_type !== undefined) filter["mealtype_id"] = meal_type;
  if (location !== undefined) filter["location_id"] = location;
  if (cuisine !== undefined) filter["cuisine_id"] = { $in: cuisine };
  if (hcost !== undefined && lcost !== undefined)
    filter["min_price"] = { $gte: lcost, $lte: hcost };

  let result = await RestaurantList.find(filter, {
    name: 1,
    city: 1,
    locality: 1,
    min_price: 1,
    cuisine: 1,
    image: 1,
  }).sort({ min_price: sort });

  let newResult = result.slice(startIndex, endIndex);

  res.status(200).send({
    status: true,
    newResult,
  });
};
