BackgroundResultat.jsx

import React from 'react'

function BackGroundResultat({children}) {
    const bgPage ={
        minHeight:"100%",
        minWidth:"100%",
        background: "linear-gradient(#292D3E 39.64%, #F52D7E 100%)",
        // overflow: "hidden",
      }

    return (
        <div style={bgPage}>
            {children}
        </div>
    )
}

export default BackGroundResultat