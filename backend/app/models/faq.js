const mongoose = require('mongoose');

const { Schema } = mongoose;

const faqSchema = new Schema ({
    question:
    {
        type: String,
        trim:true,
        required:true,
        unique:true
    },
    answer:
    {
        type: String,
        trim:true,
        required:true,
        unique:true
    },
    isActive:
    {
        type: String,
    },
    category:
    {
        type:String
    }
})