import React from 'react'
import '../css/style.css';

function Button(props)
{
    return  <>
<button type="submit" className={`btn btn-primary ${ props.btnsize } ${ props.loader } mr-10`}  disabled={props.disable}>{props.icon} {props.label}</button>
        </>
}
export default Button;