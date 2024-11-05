import React, { useEffect } from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({listings, setListings, initListings, setInitListings}) {
    useEffect(() => {
      fetch("http://localhost:6001/listings")
        .then((res) => res.json())
        .then((listings) => {
          setListings(listings)
          setInitListings(listings)
          });
        }, [setInitListings, setListings]);
  
  
  const sortByName = () => {                                    //make a variable to store func event inside
    const sortListings = listings.sort((a,b) => {           // sort the listings, iterates the whole array
      return a.location.localeCompare(b.location);                //localeCompare means makes sure its in the local language of your current value
    });                                                     //ascending order bec a.name is less than b.name = -1 
    setListings([...sortListings]);
  }
  
  function onDelete(id) {
    const updatedListings = listings.filter((listing)=> {
      return listing.id !== id
    })
  setListings([...updatedListings])
  }
  return (
    <main>
      <button onClick={sortByName}>Sort Alphabetically by Location</button>
      <ul className="cards">
        {listings.map((listing) => {
          return (<ListingCard 
          key={listing.id}
          listings={listing}
          onDelete={onDelete}/>)
        }) 
        }

      </ul>
    </main>
  );
}


export default ListingsContainer;
