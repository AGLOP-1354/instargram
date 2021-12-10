import React, {useEffect} from 'react';
import axios from 'axios';
import Home from "./home";

function App() {
    const callApi = async () => {
        axios.get('/api').then((res) => console.log(res.data.test));
    };

    useEffect(() => {
        callApi();
    }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
