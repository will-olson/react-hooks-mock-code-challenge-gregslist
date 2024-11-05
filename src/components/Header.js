import React from "react";
import Search from "./Search";

function Header({listings, setListings, initListings, setInitListings}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listings={listings} setListings={setListings} initListings={initListings} setInitListings={setInitListings}/>
    </header>
  );
}

export default Header;
