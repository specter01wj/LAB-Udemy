
export enum StatusEnum {
  ACTIVE = 'active',
  DRAFT = 'draft',
  ARCHIVED = 'archived'
}

const isActive = (status: StatusEnum): boolean => {
  return status === StatusEnum.ACTIVE;
}

const appDiv = document.getElementById('app');
if (appDiv) {
  appDiv.innerHTML = isActive(StatusEnum.ARCHIVED).toString();
}
