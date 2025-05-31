//mongoDB always get promise to resolve it we need add try catch block in each function of async
//instead of async we are using express middleware 'express-async-handler' it handle the exceptions in side of async express routes
//so we dont have to write all the try catch block in order to catch errors 'asyncHandler' will automatically call errorHandler when exception occur
const asyncHandler = require("express-async-handler");
const Contacts = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contacts.find();
  res.status(200).json({ message: contacts });
});

//@desc Create contacts
//@route PUT /api/contacts
//@access public

const getContact = asyncHandler(async (req, res) => {
  console.log("params_id", req.params.id);

  const contact = await Contacts.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json({ message: contact });
});

const createContacts = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All Fields Mandatory");
  }

  const contact = await Contacts.create({
    name,
    email,
    phone,
  });
  res.status(200).json({ message: contact });
});

//@desc Delete contacts
//@route DELETE /api/contacts
//@access public

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contacts ${req.params.id}` });
});

//@desc Create contacts
//@route PUT /api/contacts
//@access public

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contacts.findById(req.body.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  const updateContact = await Contacts.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json({ message: updateContact });
});

module.exports = {
  getContacts,
  getContact,
  createContacts,
  deleteContact,
  updateContact,
};
