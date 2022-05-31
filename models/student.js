const createGuts = require('../helpers/model-guts');

const tableName = 'students';
const name = "Student";

// Properties that are allowed to be selected from the database for reading.
// (e.g., `first_name`)
const selectableProps = [
    'id',
    'first_name AS name',
    'last_name',
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

    const getAllStudents = guts.findAll();

    const findStudentById = id => guts.findById(id);

    const update = (id, props) => guts.update(id, props);

    const destroy = id => guts.destroy(id);

    return {
        ...guts,
        create,
        getAllStudents,
        findStudentById,
        update,
        destroy,
    };
};