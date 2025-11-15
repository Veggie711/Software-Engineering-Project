import connectDB from '@/utils/db';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req) {
  await connectDB();

  const { email, password } = await req.json();

  if (!email || !password) {
    return new NextResponse('Email and password are required', { status: 400 });
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    return new NextResponse('User already exists', { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    email,
    password: hashedPassword,
  });

  await user.save();

  return new NextResponse('User created successfully', { status: 201 });
}
