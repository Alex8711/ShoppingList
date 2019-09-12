const express = require("express");
const router = express.Router();
const Item = require("../../model/Item");

//  attention: (req,res)
//the sequence is fixed. dont change it or you will got error
//get all items
router.get("/", (req, res) => {
  Item.find().then(items => {
    res.send(items);
  });
});

//delete an item
//remove 好像不推荐用
router.delete("/:id", (req, res) => {
  Item.deleteOne({ _id: req.params.id })
    .then(() => res.send({ success: true }))
    .catch(e => res.status(404).send({ success: false }));
});

//add an item
router.post("/", (req, res) => {
  let newItem = new Item({ name: req.body.name });
  newItem.save().then(item => res.send(item));
});

module.exports = router;
