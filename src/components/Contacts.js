import React from 'react';

const Contacts = () => {

  let liStyle = {
    color: "#E5B13A",
    fontFamily: "Acme",
    fontSize: 25,
    textAlign: "center",
    paddingLeft: 0,
    listStyle: "none"
  };

  return(
    <div style={{backgroundSize:"100%", 
                backgroundRepeat: "no-repeat", 
                height:"100vh", 
                backgroundImage: `url(${require('../images/kyloRen6.jpg')})`}}>
      <h1 style={{textAlign: "center", color: "#E5B13A", fontFamily: "Acme", padding:10, marginTop:0}}>Contact Kylo Ren</h1>
      <br/>
      <ul style={liStyle}>
        <li>Home: A Galaxy Far Far Away</li>
        <li>Galactic Phone: DS-800-EVIL</li>
        <li>Affiliations: First Order, Knights of Ren</li>
        <li><a href="https://www.facebook.com/StarWars/" style={{color: "#E5B13A"}}>Facebook</a></li>
        <li><a href="https://github.com/rickmurdock" style={{color: "#E5B13A"}}>GitHub</a></li>
        <li><a href="https://twitter.com/starwars" style={{color: "#E5B13A"}}>Twitter</a></li>
      </ul>
    </div>
    
  );
};

export default Contacts;