import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchPost, fetchComments } from "../api";

const Post = () => {
  const { postId } = useParams();

  // Fetch post
  const [post, setPost] = useState(null);
  const [postLoading, setPostLoading] = useState(true);
  const [postError, setPostError] = useState(null);
  useEffect(() => {
    async function getPost() {
      try {
        const response = await fetchPost(postId);
        if (response.error) {
          console.error("Error fetching single post with response...");
          console.error(response);
          setPostError(response.error);
        } else {
          setPost(response.post);
        }
      } catch (err) {
        setPostError(err);
      }
      setPostLoading(false);
    }
    getPost();
  }, [postId]);

  // Fetch comments
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [commentsError, setCommentsError] = useState(null);
  useEffect(() => {
    async function getComments() {
      try {
        const response = await fetchComments(postId);
        if (response.error) {
          console.error("Error fetching comments with response...");
          console.error(response);
          setCommentsError(response.error);
        } else {
          setComments(response.comments);
        }
      } catch (err) {
        setCommentsError(err);
      }
      setCommentsLoading(false);
    }
    getComments();
  }, [postId]);

  // Render

  if (postLoading) {
    return <h1>Loading Post...</h1>;
  }

  if (postError) {
    return <h1>Error Loading Post: {postError.message}</h1>;
  }

  return (
    <>
      <h1>{post.title}</h1>
      <h3>by {post.user.username}</h3>
      <p>{post.text}</p>
      <h2>Comments</h2>
      <ul>
        {commentsLoading ? (
          <li>Loading comments...</li>
        ) : (
          comments.map((comment) => <li key={comment._id}>{comment.text}</li>)
        )}
      </ul>
    </>
  );
};

export default Post;
