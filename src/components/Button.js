import React from 'react';
import PropTypes from 'prop-types';

function Button(props){
  let type = 'btn';
  if(props.primary){
    type += ' btn-primary'
  }
  if(props.secondary){
    type += ' btn-secondary'
  }
  return <button onClick={props.onClick} className={props.className}> 
      {props.children} 
    </button>;
}

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  children: PropTypes.element.isRequired
}

Button.defaultProps = {
  primary: true
}

export default Button;