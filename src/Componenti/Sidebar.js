import React, { useState, useEffect } from "react";
import NavBar from "./NavBar"
import Main from "./Main"



function Sidebar() {
    /*javascript*/

    const nome = "Gabri"
    const cognome = "Rossi"
    const [TaskOggi, setTaskOggi] = useState("Filtro")
    useEffect(() => {

        setTaskOggi("Blu"); console.log(TaskOggi)
    }, [TaskOggi]); 



    return ( /*parte che viene renderizzata -- ogni componente deve avere almeno un return*/
        <>
            <div className="box">
                <h2> {nome} {cognome} </h2>
              <h3> Designer </h3>
              <button className="btn-task">Task 1</button>
              <button className="btn-task">Task 2</button>
              <button className="btn-task">Task 3</button>
            </div>

            <NavBar nome={nome} cognome={cognome}/>
            <Main />
        </>
    );
}




export default Sidebar;