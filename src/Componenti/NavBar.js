import React from "react";


function NavBar(props) {
    /*javascript*/


    return ( /*parte che viene renderizzata -- ogni componente deve avere almeno un return*/
        <>
            <div className="navMenu">
                <h1 style={{ itemOrder: "1" }}>Ciao {props.nome}</h1>
                <p> Qui hai tutte le cose da fare </p>


            </div>


          
        </>
    );
}


export default NavBar;