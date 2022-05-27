const app = require('./index');

const PORT = 8080;

app.listen(PORT, () => {
    // await knex.schema.createTable('students', function (table) {
    //     console.log('creating students table');
    //     table.increments();
    //     table.string('first_name');
    //     table.string('last_name');
    //     table.timestamps();
    // });

    console.log(`Running on PORT ${PORT}`);
}).on('error', err => {
    console.error('[ERROR]: ', err);
});