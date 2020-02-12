import React, { Component } from "react";
import HomeMenuItem from "../homepage/MenuItem/MenuItem.component";
import "./directory.styles.scss";
import argyle from "../homepage/MenuItem/assets/argyle.jpg";
import striped from "../homepage/MenuItem/assets/striped.jpg";
import knit from "../homepage/MenuItem/assets/knit1.jpg";
import athletic from "../homepage/MenuItem/assets/athletic2.jpg";
import pop from "../homepage/MenuItem/assets/popculture3.jpg";

class Directory extends Component {
  state = {
    sections: [
      {
        name: "Argyle",
        imageUrl: argyle,
        size: "",
        id: 1
      },
      {
        name: "Striped",
        imageUrl: striped,
        size: "",
        id: 2
      },
      {
        name: "Knit",
        imageUrl: knit,
        size: "",
        id: 3
      },
      {
        name: "Athletic",
        imageUrl: athletic,
        size: "large",
        id: 4
      },
      {
        name: "Pop Culture",
        imageUrl: pop,
        size: "large",
        id: 5
      }
    ]
  };

  render() {
    let items = this.state.sections.map(({ name, imageUrl, id, size }) => {
      return (
        <HomeMenuItem key={id} name={name} imageUrl={imageUrl} size={size} />
      );
    });
    return <div className="directory-menu">{items}</div>;
  }
}

export default Directory;
