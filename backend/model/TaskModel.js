const connection = require('./connection');

const getAll = async () => connection()
  .then((db) => db.collection('tasks').find().toArray())
  // .then((result) => result);

module.exports = {
  getAll,
};
