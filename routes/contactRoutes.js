const express = require('express');
const { getContacts, getContact, deleteContact, createContacts, updateContact } = require('../controllers/contactController');
const router = express.Router();

// router.route("/").get(getContacts);

// router.route("/:id").get(createContact);

// router.route("/").post(createContact);

// router.route("/:id").put(updateContact);


// router.route("/:id").delete(deleteContact);

//above most common routes now simplifying 
//multiple https methods here only declaring

router.route("/").get(getContacts).post(createContacts);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);




module.exports = router