import React from 'react'

function BackGroundTwo({children}) {
    const bgPage ={
        minHeight:"100%",
        minWidth:"100%",
        background: "linear-gradient(157.89deg, #292D3E 62.84%, #F52D7E 92.29%)",
        overflow: "hidden",
      }

    return (
        <div style={bgPage}>
            {children}
        </div>
    )
}

export default BackGroundTwo
