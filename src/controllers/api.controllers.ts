import { Request, Response  } from "express";

const hello = (_: Request, res: Response): void => {
    res.json({ greeting: 'hello API' });
}

export {
    hello
}