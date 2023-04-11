import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import nlp from 'compromise';
const SearchBar= () => {
  const [searchTerm, setSearchTerm] = useState("");
   const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const getKeyword = () => {
      const doc = nlp(searchTerm);
      const words = doc.nouns().not('#StopWord').out('array');
      let maxCount = 0;
      let mostImportantWord = '';

      for (let i = 0; i < words.length; i++) {
        const count = doc.match(words[i]).length;
        if (count > maxCount) {
          maxCount = count;
          mostImportantWord = words[i];
        }
      }
      return mostImportantWord;
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const keyword = getKeyword();
    let route = 'results';
    if(searchTerm.includes('how')){
      route = 'how';
    } else if (searchTerm.includes('where')){
      route = 'where';
    } else if (searchTerm.includes('what')){
      route = 'what';
    }
    navigate(`/${route}?key=${keyword}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}
export default SearchBar;