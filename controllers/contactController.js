const asyncHandler = require('express-async-handler')
// @description Get All Contacts
//  @route Get /api/contacts
//  @access public
const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: 'Get All Contacts' })
})


// @description Create New Contacts
//  @route POST /api/contacts
//  @access public
const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body

    if (!name || !email || !phone) {
        res.status(400)
        // .json({ msg: 'Please fill all fields' })
        throw new Error('Please fill all fieldds')
    }
    console.log("req:", req.body)

    res.status(201).json({ msg: 'Create Contacts' })
})


// @description get individual Contacts
//  @route GET /api/contacts/:id
//  @access public
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: `get  Contact by id ${req.params.id}` })
})

// @description update individual Contacts
//  @route PUT /api/contacts/:id
//  @access public
const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: `Update Contacts of id ${req.params.id}` })
})

// @description delete individual Contacts
//  @route Delete /api/contacts/:id
//  @access public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: `Delete Contacts ${req.params.id}` })
})
module.exports = { getContact, createContact, getContacts, updateContact, deleteContact }