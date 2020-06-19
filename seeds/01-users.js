
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tableName').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tableName').insert([
        {name: 'steele'},
        {name: 'cole'},
        {name: 'jack'},
        {name: 'john'}
      ]);
    });
};
