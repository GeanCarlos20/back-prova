/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('receita', function(table) {
    table.uuid('id').defaultTo(knex.fn.uuid()).unique()
    table.string('nome').notNullable()
    table.integer('tempoPreparo').defaultTo(0).notNullable()
    table.float('custoAproximado').defaultTo(0).notNullable()
})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
