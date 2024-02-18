
let fruits1: string[] = ['Apple', 'Orange', 'Banana'];
let fruits2: Array<string> = ['Apple', 'Orange', 'Banana'];

let foo: string | number = 'foo';
let values: (string | number)[] = ['Apple', 2, 'Orange', 3];

const appDiv = document.getElementById('app');
if (appDiv) {
  appDiv.innerHTML = values.toString();
}
