const router = require('express').Router();

const {
    getStudent,
    getStudents,
    postStudent,
    updateById,
    deleteById,
} = require('../controllers/student');

router.route('/student')
    .post(postStudent)
    .get(getStudents);

router.route('/student/:id')
    .get(getStudent)
    .put(updateById)
    .delete(deleteById);

module.exports = router;

// studentRouter
//     .route('/')
//     .get(async (request, response) => {
//         // const userRaw = await knex.schema.raw(`SELECT * FROM students`).rows;

//         // SELECT * FROM students
//         // const allStudents = await knex('students');

//         // same as above
//         const users = await knex
//             .select()
//             .table('students');

//         response.json({
//             users
//         });
//     });

// module.exports = studentRouter;