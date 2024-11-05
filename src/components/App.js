import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [initListings, setInitListings] = useState([]);

  return (
    <div className="app">
      <Header listings={listings} setListings={setListings} initListings={initListings} setInitListings={setInitListings}/>
      <ListingsContainer listings={listings} setListings={setListings} initListings={initListings} setInitListings={setInitListings}/>
    </div>
  );
}

export default App;
