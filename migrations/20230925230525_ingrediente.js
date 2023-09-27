/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('ingrediente', function(table) {
    table.uuid('id').defaultTo(knex.fn.uuid())
    table.string('nome').notNullable()
    table.uuid('id_receita').references('id').inTable('receita')
});
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
