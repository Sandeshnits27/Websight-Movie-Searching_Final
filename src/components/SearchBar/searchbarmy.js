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
      <a href="https://www.linkedin.com/in/sandipan-biswas-a436982a1/" target="blank2" > <button className='SearchButton' >SeArCh-MaRo-ReE</button></a>
    </div>
  );
};