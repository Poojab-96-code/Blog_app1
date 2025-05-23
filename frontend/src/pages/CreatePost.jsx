// import React, { useState } from 'react';
// import API from '../services/api';

// const CreatePost = () => {
//   const [form, setForm] = useState({ title: '', content: '' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post('/posts', form);
//       alert('Post created');
//       window.location.href = '/dashboard';
//     } catch (err) {
//       alert('Failed to create post');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto">
//       <input
//         className="block w-full mb-4 p-2 border"
//         type="text"
//         placeholder="Title"
//         value={form.title}
//         onChange={(e) => setForm({ ...form, title: e.target.value })}
//         required
//       />
//       <textarea
//         className="block w-full mb-4 p-2 border"
//         placeholder="Content"
//         rows={6}
//         value={form.content}
//         onChange={(e) => setForm({ ...form, content: e.target.value })}
//         required
//       />
//       <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
//         Create
//       </button>
//     </form>
//   );
// };

// export default CreatePost;

import React, { useState } from 'react';
import API from '../services/api';

const CreatePost = () => {
  const [form, setForm] = useState({ title: '', content: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/posts', form);
      alert('Post created');
      window.location.href = '/dashboard';
    } catch (err) {
      alert('Failed to create post');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 mx-auto" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4 text-center">Create New Post</h2>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Content"
          rows="6"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Create
      </button>
    </form>
  );
};

export default CreatePost;

