import { Request, Response } from 'express';
import { UserService } from '../service/userService';

export class UserController {
  private userService = new UserService();

  getUser = (req: Request, res: Response) => {
    try {
      const data = this.userService.getUserData();
      return res.status(200).json({ data, message: 'get user successful' });
    } catch (e) {
      return res.status(500).json({ data: {}, message: e.message });
    }
  };
}
