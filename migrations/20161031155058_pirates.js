'use strict'

exports.up = function(knex) {
    return knex.schema.createTable('pirates', (table) => {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.string('poison').notNullable().defaultTo('');
        table.string('accessory').notNullable().defaultTo('');
        table.string('image_url').notNullable().defaultTo('');
        table.timestamps(true, true);
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('pirates')
}
