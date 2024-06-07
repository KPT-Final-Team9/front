import { UserRole } from '@/constants';

export interface LoginTab {
  title: string;
  value: UserRole;
  inputs: {
    title: string;
    placeholder: string;
    id: string;
    type: string;
  }[];
}
export interface FormInput {
  inputField: string;
  account: string;
  role: string;
  [key: string]: any;
}

interface User {
  email: string;
}

export interface CustomSession {
  user: User;
  expires: string;
  role: string;
}
