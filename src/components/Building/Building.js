import React from 'react';

import {listingShape} from '../../propz/listingProp';
import {formatPrice} from '../../helpers';
import './Building.css';

class Building extends React.Component {
  static propTypes = {listing: listingShape};

  render () {
    const {listing} = this.props;
    if (!listing) {
      return (
        <h1>Oh No!</h1>
      );
    }
    return (
      <div className="Building">
        <div className="row">
          <div className="col-xs-6">
            <img className="building-image" src={listing.imageUrl} alt="Selected Building"/>
          </div>
          <div className="col-xs-6">
            <h3>{formatPrice(listing.price)}</h3>
            <p>{formatPrice(listing.estimatedMonthlyMorgage)} /month</p>
            <h4>{listing.address} {listing.city}, {listing.state} {listing.zip}</h4>
            <h5>{listing.numBeds} /Bed {listing.numBaths} /Bath</h5>
            <h5>{listing.squareFootage} ft<sup>2</sup></h5>
            <p>{listing.description}</p>
          </div>
        </div>
        <h2>Building</h2>

      </div>
    );
  }
}

export default Building;
