import User from "../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const generateToken = (userId) =>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn:'7d'});
    return token;
}

/** Controller for user registration
 * - POST: /api/users/register
*/
export const registerUser = async(req, res) => {
    try{
        const {name, email,  password} = req.body;

        //Check if required fields are present
        if(!name || !email || !password){
            return res.status(400).json({
                message: 'Missing required fields'
            })
        }

        //Check if user already exists
        const user = await User.findOne({email});

        if(user){
            return res.status(400).json({
                message: 'User already exists'
            })
        }

        //Create new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name, email, password:hashedPassword
        });

        //Return success message
        const token = generateToken(newUser._id);
        newUser.password = undefined;

        return res.status(201).json({
            message: "User created successfully",
            token,
            user: newUser
        })
    }catch(err){
        return res.status(400).json({
            message: err.message
        })
    }
}

/** Controller for user login
 * - POST: /api/users/login
*/
export const loginUser = async(req, res) => {
    
    try{
        const {email,  password} = req.body;

        //Check if required fields are present
        if(!email || !password){
            return res.status(400).json({
                message: 'Missing required fields'
            })
        }

        //Check if user exists
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                message: 'Invalid email or password'
            })
        }

        //Check if password is correct
        if(!user.comparePassword(password)){
            return res.status(400).json({
                message: 'Invalid email or password'
            })
        }

        //Return Success message
        const token = generateToken(user._id);
        user.password = undefined;
        
        return res.status(200).json({
            message: "Login successfull",
            token,
            user
        })
    }catch(err){
        return res.status(400).json({
            message: err.message
        })
    }
}

/** Controller for getting user by id
 * - GET: /api/users/data
*/
export const getUserById = async(req, res) => {

    try{
        const userId = req.userId;

        //Check if user exists
        const user = await User.findById(userId);
        if(!user) return res.status(404).json({
            message: "User not found"
        });

        //return user
        user.password = undefined;
        return res.status(200).json({
            user
        })
   
    }catch(err){
        return res.status(400).json({
            message: err.message
        })
    }
}