import React from 'react'

function BackGroundOne({children}) {
    const bgPage ={
        minHeight:"100%",
        minWidth:"100%",
        background: "linear-gradient(240.23deg, #292D3E 68.45%, #F52D7E 102.75%)"
      }

    return (
        <div style={bgPage}>
            {children}
        </div>
    )
}

export default BackGroundOne
