const controller = require("../controllers/locaisController");

const express = require("express");


const router = express.Router();


router.get("/all", controller.getAlllocais);
router.post("/new", controller.addNovoLocal);
router.patch("/:id", controller.updateLocal);
router.delete("/:id", controller.deleteLocal);

module.exports = router;