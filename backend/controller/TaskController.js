const { Router } = require('express');

const TaskModel = require('../model/TaskModel');

const router = Router();

router.get('/', async (req, res) => {
  const tasksList = await TaskModel.getAll();

  return res.status(200).json(tasksList);
});

module.exports = router;
