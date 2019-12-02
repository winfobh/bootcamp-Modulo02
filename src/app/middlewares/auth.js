import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

<<<<<<< HEAD
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
=======
  if(!authHeader){
    return res.status(401).json({error: 'Token not provided'});
>>>>>>> f85fba0502a8c61dc5f2c2809476be933a84b885
  }

  const [, token] = authHeader.split(' ');

<<<<<<< HEAD
  try {
=======
  try{
>>>>>>> f85fba0502a8c61dc5f2c2809476be933a84b885
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    return next();
<<<<<<< HEAD
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
=======

  } catch (err){
    return res.status(401).json({error: 'Token invalid'})
  }

}
>>>>>>> f85fba0502a8c61dc5f2c2809476be933a84b885
