// @description Get All Contacts
//  @route Get /api/contacts
//  @access public
const getContacts = (req, res) => {
    res.status(200).json({ msg: 'Get All Contacts' })
}


// @description Create New Contacts
//  @route POST /api/contacts
//  @access public
const createContact = (req, res) => {
    console.log("req:", req.body)
    
    res.status(201).json({ msg: 'Create Contacts' })
}


// @description get individual Contacts
//  @route GET /api/contacts/:id
//  @access public
const getContact = (req, res) => {
    res.status(200).json({ msg: `get  Contact by id ${req.params.id}` })
}

// @description update individual Contacts
//  @route PUT /api/contacts/:id
//  @access public
const updateContact = (req, res) => {
    res.status(200).json({ msg: `Update Contacts of id ${req.params.id}` })
}

// @description delete individual Contacts
//  @route Delete /api/contacts/:id
//  @access public
const deleteContact = (req, res) => {
    res.status(200).json({ msg: `Delete Contacts ${req.params.id}` })
}
module.exports = { getContact, createContact, getContacts, updateContact, deleteContact }