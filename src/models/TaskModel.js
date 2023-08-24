const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    // driverName: {
    //   type: String,
    //   required: true,
    // },
    email: {
      type: String,
      required: true,
    },
    plateNumber: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longtitude: {
      type: Number,
      required: true,
    },
    remarks: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("tasks", TaskSchema);
