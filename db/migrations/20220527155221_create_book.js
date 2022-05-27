/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('books', (t) => {
    t.increments('id').primary().unsigned();
    t.integer('student_id').unsigned();
    t.string('book_name');
    t.string('author');
    t.date('issue_date');
    t.date('return_date');
    t.foreign('student_id').references('id').inTable('students').deferrable('deferred')
      .onDelete('CASCADE');
    t.timestamps();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('books');
};