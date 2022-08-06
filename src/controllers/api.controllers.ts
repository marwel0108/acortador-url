import { Request, Response  } from "express";

import Url from "../models/Url";

const getUrl = (req  : Request, res : Response) : void => {

    const url = Url.getUrl(req.params.url);
    res.writeHead(301, {
        Location: `${url.originalUrl}`
    }).end();
}

const shortUrl = (req: Request, res: Response): any => {
    
    Url.createShortUrl(req.body);
    
    res.redirect('/')
}

export {
    shortUrl, 
    getUrl
}