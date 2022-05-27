const {
    Book
} = require('../models');

const postBook = (req, res, next) => {
    const props = req.body;

    Book.create(props)
        .then(book => res.json({
            ok: true,
            message: 'book created',
            book,
        }))
        .catch(next);
};

const getBooks = (req, res, next) => {
    Book.findAll()
        .then(books => res.json({
            ok: true,
            message: 'Books found',
            books,
        }))
        .catch(next);
};

const getBook = (req, res, next) => {
    const props = req.params.id;

    Book.findById(props)
        .then(book => res.json({
            ok: true,
            message: 'Book found',
            book,
        }))
        .then(next);
};

const updateBook = (req, res, next) => {
    const props = req.body;
    const id = req.params.id;

    Book.update(id, props)
        .then(book => res.json({
            ok: true,
            message: 'Book updated',
            book,
        }))
        .catch(next);
};

const destroy = (req, res, next) => {
    const id = req.params.id;

    Book.destroy(id)
        .then(book => res.json({
            ok: true,
            message: 'book deleted',
            book,
        }))
        .catch(next);
};

module.exports = {
    postBook,
    getBooks,
    getBook,
    updateBook,
    destroy,
};