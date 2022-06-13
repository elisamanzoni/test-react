import React from "react";
import NavBar from "./NavBar"
import Main from "./Main"

function Sidebar() {
    /*javascript*/


    return ( /*parte che viene renderizzata -- ogni componente deve avere almeno un return*/
        <>
            <div className="box">
              <h2> Gabri Rossi </h2>
              <h3> Designer </h3>
              <button className="btn-task">Task 1</button>
              <button className="btn-task">Task 2</button>
              <button className="btn-task">Task 3</button>
            </div>

            <NavBar />
            <Main />
        </>
    );
}


export default Sidebar;