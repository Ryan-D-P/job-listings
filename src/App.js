import logo from './logo.svg';
import JSONdata from "./data.json";
import { useState } from 'react';
import FilterMenu from './FilterMenu';
import JobListings from './JobListings';

function App() {
  // State to manage the job listings data
  const [data, setData] = useState(JSONdata);

  // State to manage the list selected filters
  const [filterList, setFilterList] = useState([]);

  return (
    <div className="App">
      <header className="header-background"></header>
      <main className="main-content">
        <FilterMenu listingsData={ JSONdata } data={ data } setData={ setData } filterList={ filterList } setFilterList={ setFilterList } />
        <JobListings listingsData={ JSONdata } data={ data } setData={ setData } filterList={ filterList } setFilterList={ setFilterList } />
      </main>
    </div>
  );
}

export default App;
