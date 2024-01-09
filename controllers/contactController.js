const asyncHandler = require('express-async-handler')
const Contacts = require('../models/contactModel')

// @description Get All Contacts
//  @route Get /api/contacts
//  @access public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contacts.find()
    console.log("contacts:", contacts)
    res.status(200).json(contacts)
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
    const contact = await Contacts.create({
        name, email, phone
    })
    console.log("contact:", contact)

    res.status(201).json(contact)
})


// @description get individual Contacts
//  @route GET /api/contacts/:id
//  @access public
const getContact = asyncHandler(async (req, res) => {
    console.log("req.params.id:", req.params.id)
    const contact = await Contacts.findById(req.params.id)
    console.log("contact:", contact)
    if (!contact) {
        res.status(404)
        throw new Error("Contact not found");
    }
    res.status(200).json(contact)
})

// @description update individual Contacts
//  @route PUT /api/contacts/:id
//  @access public
const updateContact = asyncHandler(async (req, res) => {
    console.log("req.params.id:", req.params.id)
    const contact = await Contacts.findById(req.params.id)
    console.log("contact:", contact)
    if (!contact) {
        res.status(404)
        throw new Error("Contact not found");
    }
    const updateContact = await Contacts.findByIdAndUpdate(
        req.params.id, 
        req.body,
        {new:true}
    )
    res.status(200).json(updateContact)
})

// @description delete individual Contacts
//  @route Delete /api/contacts/:id
//  @access public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: `Delete Contacts ${req.params.id}` })
})
module.exports = { getContact, createContact, getContacts, updateContact, deleteContact }