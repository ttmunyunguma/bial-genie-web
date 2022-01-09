import {IUser} from "../models/IUser";

export class Login {
  static readonly type = '[Auth] Login';
  constructor(public user: IUser) {
  }
}

export class Logout {
  static readonly type = '[Auth] Logout';
}
