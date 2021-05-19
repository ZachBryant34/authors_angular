const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {type:String, required: [true, 'Author name is required'], minLength:[3,'Name must be at least 3 characters']}
}, {timestamps: true})
// quote: {type:String, required: [true, 'Author name is required']}

const Author = mongoose.model('Author', AuthorSchema)

module.exports ={
    Author: Author,
    AuthorSchema: AuthorSchema
}