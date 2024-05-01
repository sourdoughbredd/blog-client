import { useContext } from "react";
import { useParams } from "react-router";
import { PostContext } from "../context/PostContext";

const Post = () => {
  const { postId } = useParams();
  const { posts } = useContext(PostContext);

  console.log(posts);

  const post = posts.find((post) => post._id === postId);

  return (
    <>
      <h1>Post Page {postId}</h1>
      <h2>{post.title}</h2>
    </>
  );
};

export default Post;
