import { API_URL, GET_USER_PROFILE_ROUTE } from '@/constants';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = req.cookies['connect.sid'];
  console.log("The session is"+session);

  if (!session) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  try {
    const response = await fetch(API_URL+GET_USER_PROFILE_ROUTE, {
      headers: {
        Cookie: `connect.sid=${session}`
      }
    });
    const userData = await response.json();
    console.log("The user data is"+userData);
    if (!userData.id) {
      throw new Error('Failed to fetch user');
    }
    return res.status(200).json(userData);
  } catch (error) {
    console.log("The error is"+ error);
    return res.status(401).json({ message: 'Failed to fetch user' });
  }
}