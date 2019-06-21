const router = require("express").Router();
const gamesModel = require("./games-model");

router.get("/", (req, res) => {
  gamesModel
    .find()
    .then(games => {
      res.status(200).json(games);
      // console.log(games);
    })
    .catch(err => res.json(err));
});

router.delete("/:id", (req, res) => {
  gamesModel
    .destroy(req.params.id)
    .then(deletedSport => {
      if (deletedSport > 0) {
        res.status(200).json(deletedSport);
      } else {
        res.status(404).json({ error: "not found" });
      }
    })
    .catch(err => res.status(500).json({ success: false, err }));
});

router.post("/", (req, res) => {
  gamesModel
    .add(req.body)
    .then(gameAdded => res.status(200).json(gameAdded))
    .catch(err => {
      res.status(500).json({ success: false, err });
      console.log(err);
    });
});

module.exports = router;
