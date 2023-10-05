import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import db from '../models/index.js';

const { User, Role, UserRole } = db;

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists. Please use a different email.' });
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hash });

    const clientRole = await Role.findOne({ where: { role: 'client' } });
    if (clientRole) {
      await user.addRole(clientRole);
    }

    const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1hr' });
    res.json({ token });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(401).json({ message: 'This email is not registered' });
      return;
    }

    const result = await bcrypt.compare(password, user.password);
    if (result) {
      const userRoles = await UserRole.findAll({ where: { user_id: user.id } });
      const roleIds = userRoles.map(userRole => userRole.role_id);

      const token = jwt.sign({ id: user.id }, 'secret_jwt', { expiresIn: '1hr' });
      res.json({ token, user, roleIds });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    next(error);
  }
};

const changePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user.id;

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const passwordMatches = await bcrypt.compare(currentPassword, user.password);
    if (!passwordMatches) {
      return res.status(401).json({ message: 'Current password is incorrect' });
    }

    const newPasswordHash = await bcrypt.hash(newPassword, 10);
    user.password = newPasswordHash;
    await user.save();

    return res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    next(error);
  }
};

export { signup, login, changePassword };
