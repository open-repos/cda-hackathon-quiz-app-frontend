import React from 'react'

function BackGroundTwo({children}) {
    const bgPage ={
        minHeight:"100%",
        minWidth:"100%",
        background: "linear-gradient(180deg, #F52D7E 0%, #292D3E 4.91%, #292D3E 95.02%, #F52D7E 100%)",
        overflow: "hidden",
      }

    return (
        <div style={bgPage}>
            {children}
        </div>
    )
}

export default BackGroundTwo
