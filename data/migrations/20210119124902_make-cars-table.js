
exports.up = function (knex) {
    return knex.schema.createTable('cars', table => {
        table.increments('car_id');
        table.string('VIN', 17).notNullable().unique();
        table.string('make').notNullable();
        table.string('model').notNullable();
        table.integer('mileage').notNullable();
        table.string('transmission');
        table.string('status');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars');
};
