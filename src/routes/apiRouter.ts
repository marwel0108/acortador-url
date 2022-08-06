import { Router  } from "express";
import { shortUrl, getUrl } from '../controllers/api.controllers';

const apiRouter: Router = Router();

apiRouter.get('/:url', getUrl)
apiRouter.post('/shorturl', shortUrl);

export default apiRouter;