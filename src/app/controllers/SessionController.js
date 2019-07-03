import jwt from 'jsonwebtoken';

import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  // eslint-disable-next-line class-methods-use-this
  async store(rec, res) {
    const { email, password } = rec.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.ChekPassword(password))) {
      return res.status(401).json({ error: 'Password invalid' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.SecretKey, {
        expiresIn: authConfig.inspireDays,
      }),
    });
  }

  // eslint-disable-next-line class-methods-use-this
  async Create(rec, res) {
    const { email, password, name } = rec.body;

    const user = await User.findOne({ where: { email } });

    if (user) {
      return res.status(401).json({ error: 'User already' });
    }

    if (!password) {
      return res.status(401).json({ error: 'Password invalid' });
    }

    if (!name) {
      return res.status(401).json({ error: 'Name invalid' });
    }

    User.create(rec.body);

    return res.json({
      user: {
        name,
        email,
      },
    });
  }
}

export default new SessionController();
