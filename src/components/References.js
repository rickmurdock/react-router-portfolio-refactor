import React from 'react';

const References = () => {

  let liStyle = {
    color: "#E5B13A",
    fontFamily: "Acme",
    fontSize: 25,
    listStyle: "none",
    paddingLeft: 0,
  };

  return(
    <div>
      <h1 style={{textAlign: "center", color: "#E5B13A", fontFamily: "Acme", padding:10, marginTop:0}}>Kylo Ren's References</h1>
      <br/> 
      <div className="row">
        <div className="col-md-5 col-md-offset-4">
          <ul style={liStyle} >
            <li>Captain Phasma</li>
            <li>Galactic Phone: CYN-10C</li>
            <li>He's the perfect boss.</li>
            <br/>
            <li>Supreme Leader Snokes</li>
            <li>Galactic Phone: LQY-578</li>
            <li>Kylo is a fine evil young man, though he tends to believe in anchient Jedi stuff.</li>
            <br/>
            <li>Han Solo</li>
            <li>Galactic Phone: 878-GMF</li>
            <li>Kylo's what every parent want's their son to turn out to be.</li>
          </ul>
        </div>
      </div>          
    </div>
  );
};

export default References;