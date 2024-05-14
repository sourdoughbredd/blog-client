// API base URL
const BASE_URL =
  import.meta.env.VITE_ENV === "development"
    ? import.meta.env.VITE_DEV_API_URL
    : import.meta.env.VITE_PROD_API_URL;

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

// Logout function
export async function logout(refreshToken) {
  const response = await fetch(`${BASE_URL}/users/logout`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ refreshToken }),
  });
  return await response.json();
}

// Signup function
export async function signup(email, username, password) {
  const response = await fetch(`${BASE_URL}/users/signup`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ email, username, password }),
  });
  return await response.json();
}

// Refresh jwt access token
export async function refreshAccessToken(refreshToken) {
  const response = await fetch(`${BASE_URL}/users/token`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ refreshToken }),
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
