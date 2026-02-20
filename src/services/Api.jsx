import axios from "axios";
import { useState, useEffect } from "react";

const UseDataFetcher = () => {
  const totalPages = 42;
  const [loading, setLoading] = useState(true);
  const [pages, setpages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(0);
  const [episodes, setEpisodes] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const page = Math.min(currentPage + 1, totalPages);
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page}`,
      );
      const episodes = await axios.get(
        "https://rickandmortyapi.com/api/episode",
      );
      setEpisodes(episodes.data.info.count);
      setCount(response.data.info.count);
      setpages(response.data.results);
      setLoading(false);
    };
    fetchData();
  }, [currentPage]);

  return {
    count,
    episodes,
    loading,
    pages,
    totalPages,
    currentPage,
    setCurrentPage,
  };
};

export default UseDataFetcher;
