const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAll = async () => connection()
  .then((db) => db.collection('tasks').find().toArray());
// .then((result) => result);

const createTask = async (task) => connection()
  .then((db) => db.collection('tasks').insertOne({ task, status: 'pendente' }));

const updateStatus = async (id, status) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  return connection()
    .then((db) =>
      db.collection('tasks')
        .updateOne({ _id: ObjectId(id) }, { $set: { status } }));
};

const excludeTask = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  return connection()
    .then((db) =>
      db.collection('tasks')
        .deleteOne({ _id: ObjectId(id) }));
};

module.exports = {
  getAll,
  updateStatus,
  createTask,
  excludeTask,
};
