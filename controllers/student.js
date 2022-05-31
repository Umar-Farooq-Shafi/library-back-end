const {
    Student
} = require('../models');

const postStudent = (req, res, next) => {
    const props = req.body;

    Student.create(props)
        .then(student => res.json({
            ok: true,
            message: 'student created',
            student,
        }))
        .catch(next);
};

const getStudents = (req, res, next) => {
    Student.findAll()
        .then(students => res.json({
            ok: true,
            message: 'Users found',
            students,
        }))
        .catch(next);
};

const getStudent = (req, res, next) => {
    const props = parseInt(req.params.id);

    Student.findById(props)
        .then(student => res.json({
            ok: true,
            message: 'Users found',
            student,
        }))
        .then(next);
};

const updateById = (req, res, next) => {
    const props = req.body;
    const id = parseInt(req.params.id);

    Student.update(id, props)
        .then(student => res.json({
            ok: true,
            message: 'student updated',
            student,
        }))
        .catch(next);
};

const deleteById = (req, res, next) => {
    const id = parseInt(req.params.id);

    Student.destroy(id)
        .then(student => res.json({
            ok: true,
            message: 'student deleted',
            student,
        }))
        .catch(next);
};

module.exports = {
    postStudent,
    getStudents,
    getStudent,
    updateById,
    deleteById,
};