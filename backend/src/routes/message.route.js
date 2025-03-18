import express from "express";

import { getUsersForSidebar, getMessages, sendMessage } from "../controllers/message.controller.js";
import { checkAuth } from "../controllers/auth.controller.js";

import { protectRoute } from "../middleware/auth.middleware.js"

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage)

router.get("/check", protectRoute, checkAuth);

export default router;