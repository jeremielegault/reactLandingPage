"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();

const { REACT_APP_MONGO_URI } = process.env;

const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

var axios = require("axios");

const request = require("request-promise");

const assert = require("assert");

const { v4: uuidv4 } = require("uuid");

// This function adds one reservation to MongoDB
const addReport = async (req, res) => {
  try {
    const client = new MongoClient(REACT_APP_MONGO_URI, options);

    await client.connect();

    const db = client.db("BestManBachPlanner");

    await db.collection("fullFormData").insertOne(req.body);

    res
      .status(201)
      .json({ status: 201, message: "new reservation added", data: req.body });
    client.close();
  } catch {
    res.status(500).json({
      status: 500,
      data: req.body,
      message: "Nothing to return",
    });
  }
};

const getSingleReport = async (req, res) => {
  const client = await new MongoClient(REACT_APP_MONGO_URI, options);

  await client.connect();

  const db = client.db("BestManBachPlanner");

  // use id from mongodb
  const _id = req.params.id;

  await db.collection("fullFormData").findOne({ _id });

  await db.collection("fullFormData").findOne({ _id }, (err, result) => {
    result
      ? res.status(200).json({ status: 200, _id, data: result })
      : res.status(404).json({ status: 404, _id, data: "Not Found" });
    client.close();
  });
};

module.exports = {
  addReport,
  getSingleReport,
};
