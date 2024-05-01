// API base URL
const BASE_URL = "http://localhost:3000";

const getHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("jwtAccessToken")}`,
  "Content-Type": "application/json",
});

// Fetch all posts
export async function fetchPosts() {
  console.log("Fetching all posts from api...");
  const response = await fetch(`${BASE_URL}/posts`, {
    method: "GET",
    headers: getHeaders(),
  });
  return await response.json();
}

// Fetch a single post
export async function fetchPost(postId) {
  const response = await fetch(`${BASE_URL}/posts/${postId}`, {
    method: "GET",
    headers: getHeaders(),
  });
  return await response.json();
}

// Fetch comments for a post
export async function fetchComments(postId) {
  const response = await fetch(`${BASE_URL}/posts/${postId}/comments`, {
    method: "GET",
    headers: getHeaders(),
  });
  return await response.json();
}

// Login function
export async function login(username, password) {
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ username, password }),
  });
  return await response.json();
}

// Signup function
export async function signup(username, password) {
  const response = await fetch(`${BASE_URL}/users/signup`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ username, password }),
  });
  return await response.json();
}

// Add comment to a post
export async function addComment(postId, commentText) {
  const response = await fetch(`${BASE_URL}/posts/${postId}/comments`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ text: commentText }),
  });
  return await response.json();
}
