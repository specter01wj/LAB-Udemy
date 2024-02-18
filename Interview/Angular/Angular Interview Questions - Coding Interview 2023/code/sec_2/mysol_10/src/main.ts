
export type Foo = string;

const foo: Foo = 'foo';

export interface UserInterface {
  id: string; 
  name: string; 
  surname: string; 
  age: number; 
}

type UserFullnameType = Pick<UserInterface, 'name' | 'surname'>;

type UserPost = Omit<UserInterface, 'id'>;



const appDiv = document.getElementById('app');
if (appDiv) {
  appDiv.innerHTML = foo;
}
