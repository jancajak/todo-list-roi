export const fetchSession = () => {
  return fetch('http://localhost:9000/api/session', {
      body: JSON.stringify({errorRate: 50}),
      headers: {
          "Content-Type": "application/json"
      },
      method: 'POST'
  })
      .then(res => res.json())
};