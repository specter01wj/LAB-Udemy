import { User } from "./user";

export interface UsersState {
  isLoading: boolean;
  data: User[];
  error: string | null;
}
