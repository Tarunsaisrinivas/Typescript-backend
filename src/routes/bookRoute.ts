import { Router } from "express";

const router = Router();

router.get("/get-books", (req, res) => {
  return res.json({ sucess: false, message: "No books found"});
});

export default router;
