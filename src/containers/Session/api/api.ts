export const fetchSessionAPI = () => {
  return fetch('http://localhost:9000/api/session', {
      body: JSON.stringify({errorRate: 50}),
      headers: {
          "Content-Type": "application/json"
      },
      method: 'POST'
  })
      .then(res => res.json())
};

export const updateSessionAPI = () => {
    return fetch('http://localhost:9000/api/session', {
        body: JSON.stringify({errorRate: 50}),
        headers: {
            "Content-Type": "application/json",
            "sessionId": `${sessionStorage.getItem('sessionId')}`
        },
        method: 'PATCH'
    })
        .then(res => res.json())
};

export const deleteSessionAPI = () => {
    return fetch('http://localhost:9000/api/session', {
        headers: {
            "Content-Type": "application/json",
            "sessionId": `${sessionStorage.getItem('sessionId')}`
        },
        method: 'DELETE'
    })
        .then(res => res.json())
};