const db = require("../../data/db-config");

module.exports = {
    get,
    getById,
    insert,
    update,
    remove
};

function get() {
    return db('cars');
}

function getById(id) {
    return db('cars').where('car_id', id).first();
}

function insert(car) {
    return db('cars').insert(car)
        .then(([id]) => {
            return db('cars').where('car_id', id).first();
        });
}

function update(id, car) {
    return db('cars').where('car_id', id).update(car)
        .then(([id]) => {
            return db('cars').where('car_id', id).first();
        });
}

function remove(id) {
    return db('cars').where('car_id', id).del();
}