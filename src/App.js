import logo from './logo.svg';
import JobListings from './JobListings';
import JSONdata from "./data.json";
import { useState } from 'react';

function App() {
  // State to manage the job listings data
  const [data, setData] = useState(JSONdata);

  return (
    <div className="App">
      <header className="header-background">
        <h1>Header background</h1>
      </header>
      <main className="main-content">
        <JobListings data={ data } />
      </main>
    </div>
  );
}

export default App;
