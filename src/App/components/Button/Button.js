import React from 'react'
import './Button.css'
import PropTypes from 'prop-types'

function Button(props) {

    let my_color = null;
    switch(props.type){
        case 'verb':
            my_color = 'red';
            break;
        case 'particule':
            my_color ='CornflowerBlue';
            break;
        case 'object':
            my_color ='lightpink';
            break;
        default:
            my_color ='white';
            break;
    }

    return <button className="Button clicked" 
        onClick={(evt) =>{
            props.clicker();
        }}   
     style={{backgroundColor: my_color}}>{props.children || props.title}</button>;

}
Button.propTypes={
    children: PropTypes.any,
    title: PropTypes.string,
    type: PropTypes.string.isRequired,
    clicker: PropTypes.func.isRequired,
}
Button.defaultProps = {
    type: 'default',
    clicker: () => {},
}
export default Button;


