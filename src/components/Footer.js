import React from 'react';


function Footer() {
    return (
        <div className="Footer">
            <p style={{
                position:'absolute',
                bottom: "0", width: "100%",
                textAlign:'center',
                fontFamily: 'Lobster' 
            }}>Copyright &copy; {new Date().getFullYear()} Julian Bustamante</p>
            
        </div>
    )
}

export default Footer

/*


function Footer() {
    return (
        <div>
            <p style={{
                position:'absolute',
                bottom: "0", width: "100%",
                textAlign:'center',
            }}>Copyright &copy; {new Date().getFullYear()} Julian Bustamante</p>
        </div>
    )
}

export default Footer

*/