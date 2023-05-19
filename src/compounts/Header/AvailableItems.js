import React from 'react';
import Button from 'react-bootstrap/Button';


function AvailableItems(props) {
  return (
    

    <div>
        {props.title}
        <img src='{props.image}'alr='k'/>
        <div>
            {props.price}
        </div>
        <Button variant="primary" type='submit'>Add product</Button>
    </div>
    
  )
}

export default AvailableItems;