// import React, { useState } from 'react';
// import API from '../services/api';

// const Signup = () => {
//   const [form, setForm] = useState({ username: '', email: '', password: '' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post('/auth/signup', form);
//       alert('Signup successful');
//       window.location.href = '/login';
//     } catch (err) {
//       alert('Signup failed');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto">
//       <input
//         className="block w-full mb-4 p-2 border"
//         type="text"
//         placeholder="Username"
//         value={form.username}
//         onChange={(e) => setForm({ ...form, username: e.target.value })}
//         required
//       />
//       <input
//         className="block w-full mb-4 p-2 border"
//         type="email"
//         placeholder="Email"
//         value={form.email}
//         onChange={(e) => setForm({ ...form, email: e.target.value })}
//         required
//       />
//       <input
//         className="block w-full mb-4 p-2 border"
//         type="password"
//         placeholder="Password"
//         value={form.password}
//         onChange={(e) => setForm({ ...form, password: e.target.value })}
//         required
//       />
//       <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">
//         Signup
//       </button>
//     </form>
//   );
// };

// export default Signup;

import React, { useState } from 'react';
import API from '../services/api';

const Signup = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/signup', form);
      alert('Signup successful');
      window.location.href = '/login';
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 mx-auto" style={{ maxWidth: '400px' }}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input
          id="username"
          type="text"
          className="form-control"
          placeholder="Enter username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          id="email"
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          id="password"
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
      </div>

      <button type="submit" className="btn btn-success w-100">
        Signup
      </button>
    </form>
  );
};

export default Signup;

