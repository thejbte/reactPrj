//rfce react functional component export
//rce   react class export
import React from "react";
import Paper from '@material-ui/core/Paper'; // yarn add @material-ui/core    https://material-ui.com/getting-started/installation/



function Header() {
    return (
        <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />


        <Paper style={{padding: "5px" /*, display:"flex"*/}}  elevation={3} >
            
             <img style={{width: "50px"}} src="logo.png" alt="nice" /> 
            

            <h1 className="titulo">React App</h1>
            
        </Paper>
        </div>
    )
}

export default Header;