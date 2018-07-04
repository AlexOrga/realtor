import React from 'react';

import './ListingForm.css';

class ListingForm extends React.Component {
  state = {
    newListing: {
      address: '',
    },
  }

  formSubmit = (e) => {
    e.preventDefault();
    console.error('you clicked submit', e);
  }

  addressChange = (e) => {
    const tempListing = {...this.state.newListing};
    tempListing.address = e.target.value;
    this.setState({newListing: tempListing});
  }

  render () {
    const {newListing} = this.state;

    return (
      <div className="ListingForm col-xs-8 col-xs-offset-2">
        <h2 className="text-center">Submit new property:</h2>
        <form onSubmit={this.formSubmit}>
          <div className="row">
            <fieldset className="col-xs-3">
              <label htmlFor="address">Address</label>
              <br/>
              <input
                className="col-xs-12"
                type="text"
                id="address"
                placeholder="1234 Main Street"
                value={newListing.address}
                onChange={this.addressChange}
              />
            </fieldset>
          </div>
          <button className="col-xs-6 btn btn-danger col-xs-offset-3">Save House</button>
        </form>
      </div>
    );
  }
}

export default ListingForm;
