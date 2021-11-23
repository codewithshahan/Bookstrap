import React from "react";

function PostCard({ post }) {
  return (
    <>
      {post.title}
      {post.excerpt}
    </>
  );
}

export default PostCard;
