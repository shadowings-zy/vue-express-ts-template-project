export enum IUserStatus {
  INUSE,
  UNUSE
}

const user = [
  { username: 'user1', email: 'user1@email.com', status: IUserStatus.INUSE },
  { username: 'user2', email: 'user2@email.com', status: IUserStatus.INUSE },
  { username: 'user3', email: 'user3@email.com', status: IUserStatus.INUSE },
  { username: 'user4', email: 'user4@email.com', status: IUserStatus.INUSE },
  { username: 'user5', email: 'user5@email.com', status: IUserStatus.INUSE },
  { username: 'user6', email: 'user6@email.com', status: IUserStatus.UNUSE }
];

export const getUser = () => {
  return user;
};
