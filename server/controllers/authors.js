const mongoose = require('mongoose');
const {Author} = require('../models/author.js')

module.exports = {
    index: (req, res) => {
        Author.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    display: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    // author.quote = req. body.quote;
    create: (req, res) => {
        const author = new Author();
        author.name = req.body.name;
        console.log(req.body)
        author.save()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    update: (req, res) => {
        Author.updateOne({_id:req.params.id}, req.body, {runValidators:true})
            .then(data => {
                console.log("Updated Author's name", data)
                res.json(data)
            })
            .catch(err => res.json(err))
    },
    destroy: (req, res) => {
        Author.deleteOne({_id: req.params.id})
                .then(deletedUser => res.json(deletedUser))
                .catch(err => res.json(err));
    }
}