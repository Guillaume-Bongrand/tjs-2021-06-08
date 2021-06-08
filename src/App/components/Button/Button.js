import React from 'react'
import './Button.css'


function Button(props) {
        let my_color = null;
        switch(props.type){
            case 'verb':
                my_color = 'red';
                break;
            case 'particule':
                my_color ='blue';
                break;
            case 'action':
                my_color ='darkgreen';
                break;
            default:
                my_color ='black';
                break;
        }

     return <button className="Button" style={{backgroundColor: my_color}}>{props.children || props.title}</button>;

}

export default Button;


