
const addId = <T>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id
  }
};

const user = {
  name: 'James'
};

const result = addId(user);

const appDiv = document.getElementById('app');
if (appDiv) {
  appDiv.innerHTML = result.id;
}
