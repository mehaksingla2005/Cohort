import React, { useEffect, useState } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);  // Fetch data only once on mount

  // Check if data is null and render a loading message if so
  if (!data) {
    return <div>Loading...</div>;
  }

  // Render the data properly
  return (
    <div>
      <h2>Fetched Data:</h2>
      <p>User ID: {data.userId}</p>
      <p>ID: {data.id}</p>
      <p>Title: {data.title}</p>
      <p>Completed: {data.completed ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default DataFetcher;
