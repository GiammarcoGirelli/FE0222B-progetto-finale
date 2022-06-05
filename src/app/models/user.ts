export class User {
  id!: number;
  username!: string;
  password!: string;
  email!: string;
  roles!: [
      {
      id: number,
      roleName: string
      }
          ];
}

