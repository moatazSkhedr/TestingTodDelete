import React from 'react'
import "./Modal.css";
function Modal(props) {
  return(props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <button className='btn'
            onClick={() =>props.setTrigger(false)}

            >Close</button>
            {props.children}
        </div>
    </div>
  ) : "";   
}

export default Modal