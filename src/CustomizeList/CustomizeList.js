import React, { Component } from 'react'
import PartItem from '../PartItem/PartItem'


class CustomizeList extends Component {
  render () {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
            <PartItem 
              features={this.props.features}
              feature={feature}
              USCurrencyFormat={this.props.USCurrencyFormat}
              handleUpdate={this.props.handleUpdate}
              state={this.props.state}
            />
        </fieldset>
      );
     });

     return (
       
      <form className="main__form">
        <h2>Customize your laptop</h2>
          {features}
      </form>
     )
  }
}

export default CustomizeList