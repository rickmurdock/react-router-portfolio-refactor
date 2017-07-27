import React from 'react';

const References = () => {

  let liStyle = {
    color: "#E5B13A",
    fontFamily: "Acme",
    fontSize: 25,
    textAlign: "center",
    listStyle: "none",
    paddingLeft: 0,
  };

  return(
    <div>
      <h1 style={{textAlign: "center", color: "#E5B13A", fontFamily: "Acme"}}>Kylo Ren's References</h1>
      <br/>
      <ul style={liStyle}>
        <li>
          <div className="row">
          <div className="col-md-4"> 
            <h3>Supreme Leader Snokes</h3>
            <h5>Galactic Phone: LQY-578</h5>
            <p>Kylo is a fine evil young man, though he tends to believe in anchient Jedi stuff.</p>
          </div>
          </div>
        </li>
        <li>Captain Phasma</li>
        <li>Stormtrooper FN-2187</li>
        <li>Han Solo</li>
      </ul>
    </div>
    
  );
};

export default References;