import { getUser, IUserStatus } from '../db';

export class UserService {
  private userData = getUser();

  getUserData = () => {
    const output = this.userData.filter((item) => item.status === IUserStatus.INUSE);
    return output ? output : [];
  };
}
