const jwt = require('jsonwebtoken');
const configAuthe = require('../configAuthe/authe.json');
const user = require("../model/Users")
module.exports = (request, response, next) =>  {
    const authHeader = request.headers.authorization;

    if(!authHeader)
    return response.status(401).send({ error: 'no token provided' });

    const parts = authHeader.split(' ');

    if (!parts.length === 2)
        return response.status(401).json({ error: 'error token' });

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme))
        return response.status(401).json({ error: 'token malformatted' });

    jwt.verify(token, configAuthe.secret, async (error, decoded) => {
        if (error) return response.status(401).json({ error: 'token invalid' });

        request.userId = decoded.id;
        
         return next();

        
    });
};

