import express, { Request, Response } from 'express';
import { signIn, signUp } from '../controllers/auth'; 

const authRouter = express.Router();

authRouter.post('/signIn', (req: Request, res: Response) => {
    return signIn(req, res);
});

authRouter.post('/signUp', (req: Request, res: Response) => {
    return signUp(req, res);
});

export default authRouter;