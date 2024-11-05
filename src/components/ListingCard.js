import React, {useState} from "react";

function ListingCard({listings, onDelete}) {
  const [favorite, setFavorite] = useState(false)

function handleClickFavorite () {
  setFavorite(!favorite)
}

function handleDelete () {
  fetch(`http://localhost:6001/listings/${listings.id}`, {
    method: "DELETE"
    
  })
  .then((res) => res.json())
  .then(() => onDelete(listings.id));
}

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listings.image} alt={listings.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleClickFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClickFavorite}>☆</button>
        )}
        <strong>{listings.description}</strong>
        <span> · {listings.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
