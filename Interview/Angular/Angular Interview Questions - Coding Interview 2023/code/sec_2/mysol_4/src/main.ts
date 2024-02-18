const doSomething = (): void => {
  console.log('doSomething');
};

let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
let s2: string = vUnknown as string;

const appDiv = document.getElementById('app');
if (appDiv) {
  appDiv.innerHTML = s2;
}
