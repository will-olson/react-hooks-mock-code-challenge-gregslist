import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({listings, setListings, initListings, setInitListings}) {
    useEffect(() => {
      fetch("http://localhost:6001/listings")
        .then((res) => res.json())
        .then((listings) => {
          setListings(listings)
          setInitListings(listings)
          });
        }, []);

  function onDelete(id) {
    const updatedListings = listings.filter((listing)=> {
      return listing.id !== id
    })
  setListings([...updatedListings])
  }
  return (
    <main>
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
