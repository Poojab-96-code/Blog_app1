// import React from 'react';
// import { Link } from 'react-router-dom';

// const BlogCard = ({ post }) => {
//   return (
//     <div className="border p-4 rounded shadow">
//       <h3 className="text-xl font-bold">{post.title}</h3>
//       <p>{post.content.slice(0, 100)}...</p>
//       <p className="text-sm text-gray-500">By {post.author}</p>
//       <Link to={`/posts/${post.id}`} className="text-blue-500 mt-2 inline-block">
//         Read More →
//       </Link>
//     </div>
//   );
// };

// export default BlogCard;

import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-body">
        <h3 className="card-title h5">{post.title}</h3>
        <p className="card-text">{post.content.slice(0, 100)}...</p>
        <p className="text-muted small">By {post.author}</p>
        <Link to={`/posts/${post.id}`} className="btn btn-sm btn-outline-primary mt-2">
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

