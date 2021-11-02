import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        errors: ['Invalid credentials.'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({
        errors: ['User does not exist.'],
      });
    }

    const passwordIsValid = await User.passwordIsValid(req.body.password);
    if (!passwordIsValid) {
      return res.status(401).json({
        errors: ['Invalid email or password.'],
      });
    }

    return res.json(user);
  }
}

export default new TokenController();
