const router = require('express').Router();

const {
    postBook,
    getBooks,
    getBook,
    updateBook,
    destroy,
} = require('../controllers/book');

router.route('/book')
    .get(getBooks)
    .post(postBook);

router.route('/book/:id')
    .get(getBook)
    .put(updateBook)
    .delete(destroy);

module.exports = router;


// const knex = require('../config/knex');
// const bookRouter = express.Router();

// bookRouter
//     .route('/')
//     .get(async (request, response) => {
//         const users = await knex
//             .select()
//             .table('books');

//         response.json({
//             users
//         });
//     });

// module.exports = bookRouter;