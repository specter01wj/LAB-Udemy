const getItem = (item: number | undefined) => {
  // return (<number>item).toString();
  return (item as number).toString();
};

const appDiv = document.getElementById('app');
if (appDiv) {
  appDiv.innerHTML = getItem(140);
}
