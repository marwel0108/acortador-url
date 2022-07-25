import { Request, Response } from 'express';

export const serveHtml = (_: Request, res: Response): void => {
    res.sendFile(process.cwd() + '/src/views/index.html');
}