import express, { Router } from "express";
import { createQuery } from "../controller/queryPerson.js";

const router = express.Router();

router.post('/' , createQuery);

export default router;