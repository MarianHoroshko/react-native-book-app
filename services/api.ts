import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://openlibrary.org",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchBooksBySubject = async (subject: string): Promise<Works> => {
  const response = await axiosInstance
    .get(`/subjects/${subject}.json?details=false&limit=5`)
    .catch((err) => {
      throw new Error("Failed to fetch books data.", err);
    });

  return response.data;
};

export const fetchBooks = async (query: string): Promise<Docs> => {
  const response = await axiosInstance
    .get(`/search.json?q=${query}&limit=15`)
    .catch((err) => {
      throw new Error("Failed to fetch books data.", err);
    });

  return response.data;
};
