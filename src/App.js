import logo from './logo.svg';
import JSONdata from "./data.json";
import { useEffect, useState } from 'react';
import FilterMenu from './FilterMenu';
import JobListings from './JobListings';

function App() {
  // State to manage the job listings data
  const [data, setData] = useState(JSONdata);
  
  // State to manage the list selected filters
  const [filterList, setFilterList] = useState([]);

  // Get the filterList from localStorage if it exists
  useEffect(() => {
    const localFilterList = JSON.parse(localStorage.filterList ?? null);
    if (localFilterList?.length) setFilterList(localFilterList);
  }, []);

  return (
    <div className="App">
      <header className="header-background"></header>
      <main className="main-content">
        <FilterMenu filterList={ filterList } setFilterList={ setFilterList } />
        <JobListings data={ data } filterList={ filterList } setFilterList={ setFilterList } />
      </main>
    </div>
  );
}

export default App;
