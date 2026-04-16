import { Router } from "express";
import { home } from "../controllers/controller.js";

const router = Router();




router.route('/details').get(home);



export default router;