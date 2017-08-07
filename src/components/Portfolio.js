import React, {Component} from 'react';

export default class Portfolio extends Component {
  render(){

    let liStyle = {
      color: "#E5B13A",
      fontFamily: "Acme",
      fontSize: 25,
      textAlign: "center",
      listStyle: "none"
    };

    return(
      <div>
        <h1 style={{textAlign: "center", color: "#E5B13A", fontFamily: "Acme", padding:10, marginTop:0}}>Kylo Ren's Portfolio</h1>
        <br />
        <div style={{textAlign:"center"}}>
          <img src={require('../images/kyloRen3.jpg')} alt="" style={{width: "50%", borderRadius: "5%"}}/>
          <img src={require('../images/kyloRen4.jpg')} alt="" style={{width: "15%", borderRadius: "5%", float: "left", transform: "rotate(-7deg)", marginLeft:"50px"}}/>"
          <img src={require('../images/kyloRen5.jpg')} alt="" style={{width: "15%", borderRadius: "5%", float: "right", transform: "rotate(7deg)", marginRight:"50px"}}/>"</div>
        <br/>
        <ul style={liStyle}>
          <li>Star Wars Episode VII - The Force Awakens</li>
          <li>Star Wars Episode VIII - The Last Jedi (soon to be released)</li>
        </ul>
      </div>
    );
  }
}