import React, {Component} from 'react';

export default class About extends Component {
  render(){

    let liStyle = {
      color: "#E5B13A",
      fontFamily: "Acme",
      fontSize: 25,
      textAlign: "center",
      paddingLeft: 0,
      listStyle: "none"
    };

    return(
      <div>
        <h1 style={{textAlign: "center", color: "#E5B13A", fontFamily: "Acme"}}>About Kylo Ren</h1>
        <br />
        <div style={{textAlign:"center"}}>
          <img src={require('../images/kyloRen2.jpg')} alt="" style={{width: "40%", borderRadius: "30%"}}/>
        </div>
        <ul style={liStyle}>
          <li>He's evil</li>
          <li>He's the grandson of Darth Vader</li>
          <li>He's handy with a lightsaber</li>
          <li>He's the new "Man in Black" (sorry Johnny Cash)</li>
        </ul>
      </div>
    );
  }
}