// PostContext.js
import { createContext, useCallback, useState } from "react";
import * as api from "../api.js";

export const PostContext = createContext({ posts: [], fetchPosts: () => {} });

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  // Example function to fetch posts from API
  const fetchPosts = useCallback(async () => {
    // Perform API request to fetch posts
    // Update the 'posts' state with fetched data
    // For simplicity, this is a placeholder function
    const response = await api.fetchPosts();
    if (response.error) {
      console.log("Error fetching posts! Server response:");
      console.log(response);
      return;
    }
    const posts = response.posts;
    setPosts(posts);
  }, []);

  return (
    <PostContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostContext.Provider>
  );
};
