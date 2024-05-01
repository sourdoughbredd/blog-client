import { useContext, useEffect } from "react";
import { PostContext } from "../context/PostContext";

const Home = () => {
  const { posts, fetchPosts } = useContext(PostContext);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]); // Dependency array ensures the effect runs only once

  return (
    <>
      <h1>Home Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <a href={"/posts/" + post._id}>{post.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
