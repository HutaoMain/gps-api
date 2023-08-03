const TruckModel = require("../models/TruckModel");

const createTruck = async (req, res) => {
  try {
    const Truck = await TruckModel.create(req.body);
    res.status(200).json(Truck);
  } catch (err) {
    console.log(err);
  }
};

const getTruckById = async (req, res) => {
  try {
    const Truck = await TruckModel.findById(req.params._id);
    res.status(200).json(Truck);
  } catch (err) {
    console.log(err);
  }
};

const getTruckList = async (req, res, next) => {
  try {
    const Truck = await TruckModel.find();
    res.status(200).json(Truck);
  } catch (err) {
    next(err);
  }
};

module.exports = { createTruck, getTruckById, getTruckList };
