export const fetchTodosAPI = () => {
  return fetch('http://localhost:9000/api/todos', {
      headers: {
          "sessionId": `${sessionStorage.getItem('sessionId')}`
      },
      method: 'GET'
  })
      .then(res => res.json());
};