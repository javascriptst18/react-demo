import React from 'react';

function Header(props) {
  return <h1 className="header"> {props.name} - {props.hobby} </h1>;
}

export default Header;