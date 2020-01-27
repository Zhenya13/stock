import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {

  render() {

    const navLinks = !!this.props.userInfo ? (
      <ul className="ulStyle">
        <li className="liStyle">
          <Link to="/">Main page</Link>
        </li>
        <li>
          <Link className="liStyle" to="/userPage">
            User page
          </Link>
        </li>
        <li>
          <Link className="liStyle" to="/addPhoto">
            Add photo
          </Link>
        </li>
        <li>
          <Link className="liStyle" onClick={this.props.logOut}>
            Log out
          </Link>
        </li>
        <span style={{ marginLeft: "auto", paddingRight: 30 }}>
          User: {this.props.userInfo.name}
        </span>
      </ul>
    ) : (
      <ul className="ulStyle">
        <li className="liStyle">
          <Link to="/">Main page</Link>
        </li>
        <li>
          <Link className="liStyle" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="liStyle" to="/signUp">
            SignUp
          </Link>
        </li>
      </ul>
    );
    return <div className='navbarStyle'>{navLinks}</div>;
  }
}

export default Navbar;
