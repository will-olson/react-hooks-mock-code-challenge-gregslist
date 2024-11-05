import React, {useState} from "react";

function Search({listings, setListings, initListings, setInitListings}) {
  const [searchTerm, setSearchTerm] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(initListings)
    console.log("searched");
  }

function handleChange(event) {
  const value = event.target.value;
    setSearchTerm(value);

  if (value === ""){
    setListings([...initListings])
  } else {
    const filteredListings = initListings.filter((listing) => {
        return (listing.description.toLowerCase().includes(value.toLowerCase()))
      });
      setListings(filteredListings);
    }
  }


  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
