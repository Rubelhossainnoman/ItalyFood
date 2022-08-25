const express = require('express');
const path = require('path');

const contactForm = (req,res) =>{
    res.status(200).json(req.body);
}
module.exports= contactForm;