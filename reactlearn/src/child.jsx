import React from 'react'

const child = () => {
  return (
    <div style={{display:"flex",background:"gray"}}>
        <Card>
            <div style={{color:"green"}}>
                What do you Want to Post?<br/><br/>
                <input type="text" />
            </div>
        </Card>
        <Card>
            <div>
                Hi There
            </div>
        </Card>
      
    </div>
  )
}

function Card({children}){
    return <div style={{background:"white",borderRadius:10,color:"black",padding:10,margin:10}}>
        Upper TopBar
        {children}
        Lower Footer

    </div>
}

export default child
