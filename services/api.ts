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

export const fetchBookDetails = async (
  id: string | string[]
): Promise<BookDetails> => {
  const response = await axiosInstance.get(`/books/${id}.json`).catch((err) => {
    throw new Error("Failed to fetch book's data.");
  });

  let bookDetails: BookDetails = { ...response.data };

  // const authorResponse = await axiosInstance
  //   .get(`/authors/${bookDetails.authors[0].key.split("/")[1]}.json`)
  //   .catch((err) => {
  //     throw new Error("Failed to fetch authors data.");
  //   });

  // bookDetails = { ...bookDetails, authors: [authorResponse.data.name] };

  return bookDetails;
};
