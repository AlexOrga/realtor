import React from 'react';

import BuildingTile from '../BuildingTile/BuildingTile';
import {listingOptionalShape} from '../../propz/listingProp';
import {formatPrice} from '../../helpers';
import './Building.css';

class Building extends React.Component {
  static propTypes = {listing: listingOptionalShape};

  render () {
    const {listing} = this.props;
    if (listing.nope) {
      return (
        <div className="Building">
          <h1 className="unknown-listing"><span className="glyphicon glyphicon-arrow-left"></span>Select A Listing</h1>
        </div>
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
        <div className="row">
          <BuildingTile
            imageSrc='cal.png'
            altText='calendar'
            pTagText={`Built: ${listing.yearBuilt}`}
          />
          <BuildingTile
            imageSrc='hill.png'
            altText='hill'
            pTagText={`${listing.lotinAcres} acres`}
          />
          <BuildingTile
            imageSrc='flame.png'
            altText='flame'
            pTagText={listing.heating}
          />
          <BuildingTile
            imageSrc='snow.png'
            altText='snow'
            pTagText={listing.cooling}
          />
        </div>
        <h2>Building</h2>

      </div>
    );
  }
}

export default Building;
