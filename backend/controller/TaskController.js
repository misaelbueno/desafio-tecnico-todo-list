const TaskModel = require('../model/TaskModel');

const getAll = async (req, res) => {
  const tasksList = await TaskModel.getAll();

  return res.status(200).json(tasksList);
}

module.exports = {
  getAll,
};
