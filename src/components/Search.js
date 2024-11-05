import React, {useState} from "react";

function Search({listings, setListings, initListings, setInitListings}) {
  const [searchTerm, setSearchTerm] = useState("");
  
  // function handleSubmit(e) {
  //   
  //   console.log(initListings)
  //   console.log("searched");
  // }

function handleSubmit(event) {
  event.preventDefault();
  // const value = event.target.value;
  //   setSearchTerm(value);

  if (searchTerm === ""){
    setListings([...initListings])
  } else {
    const filteredListings = initListings.filter((listing) => {
        return (listing.description.toLowerCase().includes(searchTerm.toLowerCase()))
      });
      setListings([...filteredListings]);
    }
  }


  return (
    <>
      <form className="searchbar" >
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
       onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>🔍</button>
    </form>
    </>
  );
}

export default Search;
