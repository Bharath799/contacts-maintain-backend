const express = require('express');
const { getContacts, createContact, deleteContact, createContacts, updateContact } = require('../controllers/contactController');
const router = express.Router();

router.route("/").get(getContacts);
router.route("/:id").get(createContact);

router.route("/:id").post(createContact);

router.route("/:id").delete(deleteContact);


router.route("/:id").put(updateContact);
module.exports = router