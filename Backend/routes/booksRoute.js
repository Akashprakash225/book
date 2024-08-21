import express from "express";
import {
  createBook,
  getAllBooks,
  getOneBook,
  updateBook,
  deleteBook,
} from "../controllers/booksController.js";

const router = express.Router();

router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/:id", getOneBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
