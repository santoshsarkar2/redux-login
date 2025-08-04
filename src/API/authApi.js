export const fakeLogin = (email, password) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@test.com' && password === '123456') {
        resolve({ name: 'Test User', email });
      } else {
        reject('Invalid credentials');
      }
    }, 1000);
  });

export const fakeSignup = (name, email, password) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name, email });
    }, 1000);
  });

  