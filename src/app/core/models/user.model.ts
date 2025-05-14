import { Role } from './role.model';

export interface User {
  id: number;
  name: string;
  email: string;
  roles: Role[];
}

export interface Credential {
  email: string;
  password: string;
}
