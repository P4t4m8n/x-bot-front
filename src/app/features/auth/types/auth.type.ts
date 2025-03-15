export interface IUser {
  email?: string;
  firstName?: string;
  lastName?: string;
  imgUrl?: string;
  id?: string;
}

export interface IUserAuthSignin extends IUser {
  password?: string;
  googleId?: string;
  twitterId?: string;
  facebookId?: string;
  linkedinId?: string;
  email?: string;
}

export interface IUserAuthSignup extends IUserAuthSignin {
  confirmPassword?: string;
}

export type TAuthGoogleDto = {
  given_name: string;
  family_name: string;
  email: string;
  picture: string;
  id: string;
};
