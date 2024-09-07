const Router = require("express");
const { geToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController");

const router = Router();

router.get("/",geToDo);
router.post("/save",saveToDo);
router.post("/update",updateToDo);
router.post("/delete",deleteToDo);

module.exports =router;