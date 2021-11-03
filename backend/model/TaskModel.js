const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAll = async () => connection()
  .then((db) => db.collection('tasks').find().toArray())
  // .then((result) => result);

  const updateStatus = async (id, status) => {
    if (!ObjectId.isValid(id)) {
      return null;
    }
  
    return connection()
      .then((db) => 
        db.collection('tasks')
        .updateOne({ _id: ObjectId(id) }, { $set: { status } }));
  };

module.exports = {
  getAll,
  updateStatus,
};
