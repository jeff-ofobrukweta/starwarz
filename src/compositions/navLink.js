import React from 'react';
import { Link, useLocation } from 'react-router-dom';




const NavLink = ({
  to,
  className,
  activeClassName,
  ...rest
}) => {
  const location = useLocation()
  const isActive = location.pathname === to;


  const allClassNames = className + " " + (isActive ? `${activeClassName}` : ``);

  return <Link className={allClassNames} to={to} {...rest} />
}

export default NavLink;