
exports.seed = function (knex) {
  return knex('cars').del()
    .then(function () {
      return knex('cars').insert([
        {
          VIN: 'RG23456SFEH234AAF',
          make: 'Toyota',
          model: 'Camry',
          mileage: 10000,
          transmission: 'automatic',
          status: 'clean'
        },
        {
          VIN: 'GH234LI21GM90TY7R',
          make: 'Toyota',
          model: 'Corolla',
          mileage: 12000,
          transmission: 'automatic',
          status: 'clean'
        },
        {
          VIN: '45KAF234MA20928G0',
          make: 'Honda',
          model: 'Civic',
          mileage: 52400,
          status: 'salvage'
        },
      ]);
    });
};
