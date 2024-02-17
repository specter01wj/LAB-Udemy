
export interface UserInterface {
  id: string; 
  name: string; 
  age: number;
  getMessage(): string;
}

let user: UserInterface;

user = {
  id: '1001',
  name: 'Jin',
  age: 34,
  getMessage() {
    return `${this.name} is age: ${this.age}`;
  }
}

const appDiv = document.getElementById('app');
if (appDiv) {
  appDiv.innerHTML = user.getMessage();
}
