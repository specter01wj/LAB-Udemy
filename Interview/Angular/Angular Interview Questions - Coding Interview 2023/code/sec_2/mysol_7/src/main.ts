
export interface UserInterface {
  id: string; 
  name: string; 
}

const getName = (user?: UserInterface): string => {
  return user?.name ?? 'not set';
}



const appDiv = document.getElementById('app');
if (appDiv) {
  appDiv.innerHTML = getName({id: '1001', name: null});
}
