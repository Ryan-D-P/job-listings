import logo from './logo.svg';
import JSONdata from "./data.json";
import { useState } from 'react';
import FilterMenu from './FilterMenu';
import JobListings from './JobListings';

function App() {
  // State to manage the job listings data
  const [data, setData] = useState(JSONdata);

  return (
    <div className="App">
      <header className="header-background"></header>
      <main className="main-content">
        <FilterMenu />
        <JobListings data={ data } />
      </main>
    </div>
  );
}

export default App;
