import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const fetchPosts = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/posts`);
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
