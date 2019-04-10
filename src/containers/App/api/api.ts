export const fetchTodosAPI = () => {
  return fetch('http://localhost:9000/api/todos', {
      headers: {
          "sessionId": `${sessionStorage.getItem('sessionId')}`
      },
      method: 'GET'
  })
      .then(res => res.json());
};

export const addTodoAPI = (message: string, urgencyValue: number, isDone: boolean) => {
   return fetch('http://localhost:9000/api/todos', {
       body: JSON.stringify({ isCompleted: isDone, text: message, urgency: urgencyValue }),
       headers: {
           "Content-Type": "application/json",
           "sessionId": `${sessionStorage.getItem('sessionId')}`
       },
       method: 'POST'
   })
       .then(res => res.json())
};