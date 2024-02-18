
export interface UserInterface {
  id: string; 
  name: string; 
  age: number;
  getMessage(): string;
}

export interface ProfileInterface {
  name: string; 
  profileUrl: string; 
  isActive: boolean;
}

const transformUserToProfile = (user: UserInterface, isActive: boolean = true): ProfileInterface => {
  return {
    name: user.name,
    profileUrl: `/profiles/${user.name}`,
    isActive
  }
}

let tt1 = transformUserToProfile({id: '1001', name: 'James', age: 43, getMessage: () => 'King'}, false);

const appDiv = document.getElementById('app');
if (appDiv) {
  appDiv.innerHTML = JSON.stringify(tt1);
}
