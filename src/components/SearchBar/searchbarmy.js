import { useState } from "react";

import "./SearchBar.css";

export const SearchBar = ({ setResults, apiKey }) => {
  const [input, setInput] = useState("");
  const [query,setQuery] = useState("itanic")

  const fetchData = () => {
    const url = `https://api.themoviedb.org/3/search/multi?query=$`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const results = json.results;
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
  };

  return (
    <div className="input-wrapper">
      <input
        placeholder=" Idhar serch karo jii.......😉"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button className='SearchButton' onClick={fetchData}>SeArCh-MaRo-ReE</button>
    </div>
  );
};