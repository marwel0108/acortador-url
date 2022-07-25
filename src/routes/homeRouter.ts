import { Router } from "express";
import { serveHtml } from "../controllers/home.controllers";

const homeRouter: Router = Router();

homeRouter.get('/', serveHtml);

export default homeRouter;
