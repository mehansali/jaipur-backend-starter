import express from "express"
const router = express.Router()

// Listen to GET /health
router.get("/", function (req, res) {
  res.json({ health: "ok" })
})

router.post("/")
export default router
