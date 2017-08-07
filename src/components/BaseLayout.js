import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){

    let headerStyle = {
      backgroundColor: "gray",
      height: 70
    }

    let ulStyle = {
      listStyle: "none",
      margin: 0,
      padding: 26,
    }

    let liStyle = {
      display: "inline",
    }

    let linkStyle = {
      border: "1px solid #E5B13A",
      borderRadius: 90,
      padding: "15px",
      marginRight: "10px",
      textDecoration: "none",
      color: "#E5B13A",
      backgroundColor: "black",
    }

    let footerStyle = {
      textAlign: "center",
      backgroundColor: "lightgray",
      height: 40,
      margin: "auto"
    }

    return(
      <div>
        <div style={headerStyle}>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <NavLink exact to="/" style={linkStyle} activeStyle={{color:"red"}}>Home</NavLink>
            </li>
            <li style={liStyle}>
              <NavLink to="/about" style={linkStyle} activeStyle={{color:"red"}}>About</NavLink>
            </li>
            <li style={liStyle}>
              <NavLink to="/portfolio" style={linkStyle} activeStyle={{color:"red"}}>Portfolio</NavLink>
            </li>
            <li style={liStyle}>
              <NavLink to="/contact" style={linkStyle} activeStyle={{color:"red"}}>Contact</NavLink>
            </li>
            <li style={liStyle}>
              <NavLink to="/references" style={linkStyle} activeStyle={{color:"red"}}>References</NavLink>
            </li>
          </ul>
        </div >
        <div style={{backgroundColor: "black", height: "100vh"}}>
          {this.props.children}
        </div>
        <footer className="navbar navbar-fixed-bottom" style={footerStyle}>
          <p style={{margin:15}}>© 2017 Kylo Ren. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}