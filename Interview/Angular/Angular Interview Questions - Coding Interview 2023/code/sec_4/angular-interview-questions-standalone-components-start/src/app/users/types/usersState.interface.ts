import { UserInterface } from './user.interface';

export interface UsersStateInterface {
  isLoading: boolean;
  data: UserInterface[];
  error: string | null;
}
