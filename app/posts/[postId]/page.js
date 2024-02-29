import React from 'react';

const page = ({ params }) => {
  return <div>Пост № {params.postId}</div>;
};

export default page;
