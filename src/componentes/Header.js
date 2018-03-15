import React from 'react';
import PropTypes from 'prop-types';

const Header =({title,url,paragraph})=>(
  <header>
   <h1>{title}</h1>
    <img src={url} alt="react"/>
    <p>{paragraph}</p>
  </header>
)
Header.propTypes={
  title:PropTypes.string.isRequired
}

export default Header

