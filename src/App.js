import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=${query}`
      );
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchData();
  }, [query]);

  /* const fetchInfo = () => {
    return axios
      .get('https://api.github.com/search/repositories?q=${query}')
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []); */

  return (
    <div className="App">
      <input
        className="search"
        placeholder="search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      ></input>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {data.items?.map((dataObj, index) => (
            <tr key={index}>
              <td>{dataObj.full_name}</td>
              {''}

              <td>{dataObj.html_url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
