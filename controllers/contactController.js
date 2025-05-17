const asyncHandler = require("express-async-handler")
//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler( async (req,res) => {
    res.status(200).json({message:"Get all contacts"})
})

//@desc Create contacts
//@route PUT /api/contacts
//@access public

const getContact = asyncHandler(async (req,res) => {
    res.status(200).json({message:`Get contact ${req.params.id}`})
})

const createContacts = asyncHandler(async (req,res) => {
    console.log("Request Recived Hello",req.body);
    const {name,Address,Contact} = req.body;
    if(!name || !Address || !Contact){
        res.status(400)
        throw new Error("All Fields Mandatory")
    }
    res.status(200).json({message:req.body})

})

//@desc Delete contacts
//@route DELETE /api/contacts
//@access public

const deleteContact = asyncHandler(async (req,res) => {
    res.status(200).json({message:`Delete contacts ${req.params.id}`})
})

//@desc Create contacts
//@route PUT /api/contacts
//@access public

const updateContact = (req,res) => {
    res.status(200).json({message:`Update contact for ${req.params.id}`})
}


module.exports = {getContacts,getContact,createContacts,deleteContact,updateContact}