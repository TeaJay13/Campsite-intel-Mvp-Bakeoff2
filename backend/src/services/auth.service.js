import bcrypt from "bcryptjs";
import { User } from "../models/user.model.js";

const BCRYPT_ROUNDS = Number(process.env.BCRYPT_ROUNDS ?? 12);

export async function registerUser({ email, password, displayName }) {
  const existing = await User.findOne({ email });
  if (existing) {
    const err = new Error("Email already in use");
    err.statusCode = 409;
    throw err;
  }

  const passwordHash = await bcrypt.hash(password, BCRYPT_ROUNDS);
  const user = await User.create({ email, passwordHash, displayName });

  return { id: user._id.toString(), email: user.email, displayName: user.displayName };
}

export async function loginUser({ email, password }) {
  const user = await User.findOne({ email });
  if (!user) {
    const err = new Error("Invalid email or password");
    err.statusCode = 401;
    throw err;
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    const err = new Error("Invalid email or password");
    err.statusCode = 401;
    throw err;
  }

  return { id: user._id.toString(), email: user.email, displayName: user.displayName };
}

export async function getUserById(id) {
  const user = await User.findById(id).lean();
  if (!user) {
    return null;
  }
  return { id: user._id.toString(), email: user.email, displayName: user.displayName };
}
