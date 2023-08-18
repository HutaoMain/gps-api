const TaskModel = require("../models/TaskModel");

const createTask = async (req, res) => {
  try {
    const task = await TaskModel.create(req.body);
    res.status(200).json(task);
  } catch (err) {
    console.log(err);
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await TaskModel.findById(req.params._id);
    res.status(200).json(task);
  } catch (err) {
    console.log(err);
  }
};

const getTaskList = async (req, res, next) => {
  try {
    const task = await TaskModel.find();
    res.status(200).json(task);
  } catch (err) {
    next(err);
  }
};

const updateTaskById = async (req, res) => {
  try {
    const task = await TaskModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(task);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createTask, getTaskById, getTaskList, updateTaskById };
