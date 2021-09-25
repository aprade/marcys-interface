import { isApiUp } from './stores/api';

export const checkApiUp = () => {
  fetch('http://localhost:3000/', {
    method: 'GET'
  })
    .then(response => isApiUp.update(_ => response.status === 200))
    .catch(err => isApiUp.update(_ => false));
};
