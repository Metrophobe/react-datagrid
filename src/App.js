import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const url = "https://api.randomuser.me/";

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  let fetchData = async () => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results[0]);
        setLoading(false);
      });
  };

  //Hooks
  useEffect(() => {
    fetchData();
  }, []);

  let userOutput = JSON.stringify(user, null, 2);

  return (
    <div className="App">
      <header>React Data Fetch Example</header>
      {loading ? (
        <div>loading</div>
      ) : (
        <div>
          <img src={user.picture.medium} alt={user.name.first} />
          <pre>{userOutput}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
