import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios
      .get('https://api.github.com/search/repositories?q=react')
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
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
