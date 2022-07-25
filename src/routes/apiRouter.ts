import { Router  } from "express";
import { hello } from '../controllers/api.controllers';

const apiRouter: Router = Router();

apiRouter.get('/hello', hello);

export default apiRouter;