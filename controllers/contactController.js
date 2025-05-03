//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req,res) => {
    res.status(200).json({message:"Get all contacts"})
}

//@desc Create contacts
//@route PUT /api/contacts
//@access public

const getContact = (req,res) => {
    res.status(200).json({message:`Get contact ${req.params.id}`})
}

const createContacts = (req,res) => {
    res.status(200).json({message:`create contacts`})
}

//@desc Delete contacts
//@route DELETE /api/contacts
//@access public

const deleteContact = (req,res) => {
    res.status(200).json({message:`Delete contacts ${req.params.id}`})
}

//@desc Create contacts
//@route PUT /api/contacts
//@access public

const updateContact = (req,res) => {
    res.status(200).json({message:`Update contact for ${req.params.id}`})
}


module.exports = {getContacts,getContact,createContacts,deleteContact,updateContact}