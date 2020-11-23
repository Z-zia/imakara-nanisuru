/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

export default class MenuTemplate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeLink: props.activeLink
    };
  }

  render() {
    let Links = [];
    for (const [key, name] of this.props.pages) {
      Links.push(<li className={key == this.state.activeLink? 'active' : 'inactive'}>
          <Link to={key}>{name}</Link>
      </li>);
    };

    return (
      <div>
        <ul>
          {Links}
        </ul>
      </div>
    );
  }
}