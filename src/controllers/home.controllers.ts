import { Request, Response } from 'express';
import Url from '../models/Url';

/**
 * @author José Emmanuel Arellano Bravo
 * 
 * @param _ Request
 * @param res Response
 * 
 * @returns void
 * 
 * TODO: Añadir carga de elementos en base a urls acortadas 
 */
export const serveHtml = (_: Request, res: Response): void => {
    const urls = Url.urls as []
    res.render('index',{
        urls: [...urls]
    })
}