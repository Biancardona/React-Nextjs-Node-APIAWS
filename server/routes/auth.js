import express from ("express");

const router = express.Router()

router.get("/api/register", (req, res) => {
  res.json({
    data: "you hit register endpoint",
  });
});

module.exports = router;