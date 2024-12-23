const express = require("express");
const {createTodo, getTodo, updateTodo, removeTodo } = require("../controllers/todoController");
const router = express.Router();

router.post('/',createTodo) ;
router.get('/',getTodo);
router.put('/:id',updateTodo);
router.delete('/:id',removeTodo);

module.exports = router;