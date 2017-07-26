import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';

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
      marginTop: "15px"
    }

    let linkStyle = {
      border: "1px solid green",
      borderRadius: 90,
      padding: "15px",
      marginRight: "10px",
      textDecoration: "none",
      color: "white",
      backgroundColor: "green",
      
    }

    let footerStyle = {
      textAlign: "center",
      backgroundColor: "lightgray",
      height: 40,
      margin: "0 auto"
    }

    return(
      <div>
        <div style={headerStyle}>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <Link to="/home" style={linkStyle}>Home</Link>
            </li>
            <li style={liStyle}>
              <Link to="/about" style={linkStyle}>About</Link>
            </li>
            <li style={liStyle}>
              <Link to="/portfolio" style={linkStyle}>Portfolio</Link>
            </li>
          </ul>
        </div >
        <div style={{backgroundColor: "black", height: "80vh"}}>
          {this.props.children}
        </div>
        <footer style={footerStyle}>
          {/*By Rick*/}
        </footer>
      </div>
    );
  }
}