const mongoose = require('mongoose');
const authors = require('../controllers/authors.js');


module.exports = function(app) {
    app.get('/', (req, res) => {

    })
    app.get('/authors', (req, res) => {
        authors.index(req, res)
    })
    app.get('/authors/:id', (req, res) => {
        authors.display(req, res)
    })
    app.post('/new', (req, res) => {
        authors.create(req, res)
    })
    app.put('/edit/:id', (req, res) => {
        authors.update(req, res)
    })
    app.delete('/remove/:id', (req, res) => {
        authors.destroy(req, res)
    })
}