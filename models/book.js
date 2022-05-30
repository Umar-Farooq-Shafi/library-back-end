const createGuts = require('../helpers/model-guts');

const tableName = 'books';
const name = 'Book';

// Properties that are allowed to be selected from the database for reading.
// (e.g., `first_name`)
const selectableProps = [
    'id',
    'student_id',
    'book_name AS name',
    'author',
    'issue_date',
    'return_date',
    'updated_at',
    'created_at'
];

module.exports = knex => {
    const guts = createGuts({
        knex,
        selectableProps,
        tableName,
        name,
    });

    const create = props => guts.create(props);

    const getAllBooks = () => guts.joinFindAll('students', [
        'students.first_name',
        'students.last_name',
    ].concat(selectableProps.map(p => tableName + '.' + p)));

    const findBookById = id => guts.findById(id);

    const update = (id, props) => guts.update(id, props);

    const destroy = id => guts.destroy(id);

    return {
        ...guts,
        create,
        getAllBooks,
        findBookById,
        update,
        destroy,
    };
};