// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import API from '../services/api';

// const SinglePost = () => {
//   const { id } = useParams();
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     API.get(`/posts/${id}`)
//       .then((res) => setPost(res.data))
//       .catch((err) => console.error(err));
//   }, [id]);

//   if (!post) return <p className="text-center p-6">Loading...</p>;

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
//       <p className="text-sm text-gray-500 mb-4">By {post.author}</p>
//       <p>{post.content}</p>
//     </div>
//   );
// };

// export default SinglePost;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/api';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    API.get(`/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!post)
    return (
      <p className="text-center p-4">Loading...</p>
    );

  return (
    <div className="container my-5">
      <div className="card p-4 shadow-sm">
        <h1 className="card-title display-5 mb-3">{post.title}</h1>
        <h6 className="card-subtitle mb-4 text-muted">By {post.author || 'Unknown'}</h6>
        <p className="card-text">{post.content}</p>
      </div>
    </div>
  );
};

export default SinglePost;
