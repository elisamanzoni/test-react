import React from "react";


function NavBar() {
    /*javascript*/


    return ( /*parte che viene renderizzata -- ogni componente deve avere almeno un return*/
        <>
            <div className="navMenu">
                <h1 style={{ itemOrder: "1" }}>CIAO GABRI URLANDO</h1>
                <p> Qui hai tutte le cose da fare </p>

            </div>
            <div className="navMenu">
                <button>Task 1</button>
                <button>Task 2</button>
                <button>Task 3</button>
            </div>

          
        </>
    );
}


export default NavBar;