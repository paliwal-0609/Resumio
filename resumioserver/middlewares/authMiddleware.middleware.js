import jwt from 'jsonwebtoken';


/** Middleware for getting userId
 * - use in routes by name = protect
*/
const protect = async (req, res, next) => {
    const decoded;
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();

    }catch(err){
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
}

export default protect;