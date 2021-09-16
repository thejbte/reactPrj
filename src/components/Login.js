import React from "react";
import Paper from '@material-ui/core/Paper'; // yarn add @material-ui/core    https://material-ui.com/getting-started/installation/
import { Button } from 'react-bootstrap'


function Login() {
    return (
        <div className ="login-container">
            <label className="login-label-email" for="email" >Email</label>
            <br/>
            <input type="email" name="email" id="email" placeholder="email@loquesea.com"/>
            <input type="password" name="passwd" id="passwd" placeholder="password"/>
            <button>Log in</button>
        </div>
    )
}


function Login2() {
    return (
        <Paper className ="login-container" style={{padding: "20px" /*, display:"flex"*/}}  elevation={3}>
           {/*} <label className="login-label-email" for="email" >Email</label>*/}
            <input type="email" name="email" id="email" placeholder="email@loquesea.com"/>
            {/*<label className="login-label-passwd" for="passwd" >Password</label>*/}
            <br/>
            <input type="password" name="passwd" id="passwd" placeholder="password"/>
            <br/>
            <button href="#" type="button" class="btn btn-primary" >Login</button>
            {/*<Button variant="success" >Login</Button>{' '}*/}

        </Paper>
    )
}

export default Login2

