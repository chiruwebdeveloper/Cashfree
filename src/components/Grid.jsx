import React from "react"
import '../css/style.css'

function Grid(props)
{
return <> 
        <div class={`col-md-${props.columns} col-md-offset-${props.offset}`} style={{paddingLeft: props.gutterwidth, paddingRight: props.gutterwidth, }} >
            <p><b>.col-md-{props.columns}  { (props.offset ? "with offset columns " + props.offset + " " : " ") } </b></p>
            <p className="textjustify">{props.content}</p>
        </div>
    </>
}

export default Grid;