import React, {Component} from 'react';

export default class Home extends Component {
  render(){

    return(
      <div>
        <h1 style={{textAlign: "center", color: "#E5B13A", fontFamily: "Acme"}}>Welcome to Kylo Ren's Home Page</h1>
        <div style={{textAlign:"center", }}>
          <img src={require('../images/kyloRen1.jpg')} alt="" style={{width: "50%", borderRadius: "90%"}}/>
        </div>
      </div>
    );
  }
}