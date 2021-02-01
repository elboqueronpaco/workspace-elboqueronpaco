import { Request, Response } from "express";

export const signUp = (req: Request, res: Response) =>{
    res.json({ message: 'signup'})
}

export const signIn = (req: Request, res: Response) => {
    res.json({ message: 'signin'})
}