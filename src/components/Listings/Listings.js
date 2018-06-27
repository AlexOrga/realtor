import React from 'react';

import './Listings.css';

class Listings extends React.Component {
  render () {
    const {listings} = this.props;
    const listingsItemComponents = listings.map((listing) => {
      return (
        <li>{listing.price}</li>
      );
    });

    return (
      <div className="Listings">
        <h2>Listings</h2>
        <ul>{listingsItemComponents}</ul>
      </div>
    );
  }
}

export default Listings;
