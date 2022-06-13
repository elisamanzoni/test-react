import React from "react";
import Task from "./Task"


function Main() {
    /*javascript*/


    return ( /*parte che viene renderizzata -- ogni componente deve avere almeno un return*/
        <>
        <div className="taskContainer">
            <Task />
            <Task />
            <Task />
        </div>
        </>
    );
}


export default Main;