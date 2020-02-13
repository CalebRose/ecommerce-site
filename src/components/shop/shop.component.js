import React from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../preview-collection/preview-collection.component";

class ShopPage extends React.Component {
  // Change items when you can
  state = {
    collections: SHOP_DATA
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
