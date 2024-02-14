import { Request, Response } from "express"; 
import { userModel } from "../models/user";
import bcrypt from "bcrypt"
import { generateToken } from "../utils/auth";

export async function signUp(req: Request, res: Response): Promise<any> {
    try {
        const saltRounds = 12;
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        const newUser = new userModel({
            email,
            password: hashedPassword,
            categoryList: [],
            websiteList: [],
            wordList:[]
        });

        const user = await newUser.save();

        res.send({
            _id: user._id,
            email: user.email,
            token: generateToken(user),
        })
    }
    catch (err) {
        console.error("Error in Signup", err);
        res
          .status(500)
          .send({ message: "Internal server error", error: err.message });
    }
}

export async function signIn(req: Request, res: Response): Promise<any> {
    try {

        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        
        if (user) {
            if (bcrypt.compareSync(password, user.password)) {
                res.send({
                    _id: user._id,
                    email: user.email,
                    token: generateToken(user),
                });
                return;
            }
        }
        res.status(401).send({ message: "Invalid Credentials" });
    } catch (err) {
        console.error("Error in Sign In", err);
        res
          .status(500)
          .send({ message: "Internal server error", error: err.message });
    }
}