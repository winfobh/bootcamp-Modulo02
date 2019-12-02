import * as Yup from 'yup';
import User from '../models/User';

class UserController {
<<<<<<< HEAD
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, name, email, provider } = await User.create(req.body);
=======
  async store(req, res){

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Validation fails'});
    };

    const userExists = await User.findOne({ where: { email: req.body.email}});

    if(userExists){
      return res.status(400).json({error: 'User already exits.'});
    };

    const {id, name, email, provider} = await User.create(req.body);
>>>>>>> f85fba0502a8c61dc5f2c2809476be933a84b885

    return res.json({
      id,
      name,
      email,
<<<<<<< HEAD
      provider,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string(),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.mail) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
=======
      provider
    });
  }

  async update(req, res){
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string().min(6).when('oldPassword', (oldPassword, field) =>
      oldPassword ? field.required() : field
      ),
      confirmPassword: Yup.string().when('password', (password, field) =>
      password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Validation fails'});
    };

    const {email, oldPassword}= req.body;

    const user = await User.findByPk(req.userId);

    if( email !== user.email){
      const userExists = await User.findOne({where: {email}});

      if(userExists) {
>>>>>>> f85fba0502a8c61dc5f2c2809476be933a84b885
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

<<<<<<< HEAD
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
=======
    if(oldPassword && !(await user.checkPassword(oldPassword))){
      return res.status(400).json({ error: 'Password does not match'});
>>>>>>> f85fba0502a8c61dc5f2c2809476be933a84b885
    }

    const { id, name, provider } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }
}

<<<<<<< HEAD
export default new UserController();
=======
export default new UserController;

>>>>>>> f85fba0502a8c61dc5f2c2809476be933a84b885
