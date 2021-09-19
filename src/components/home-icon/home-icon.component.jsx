import React from 'react'
import './home-icon.styles.scss';
import { FaHome } from 'react-icons/fa'



const HomeIcon = ({ children }) => {
  const onClick = () => {
    window.appHistory.push('/');
  }
  return (
    <>
      {children}
      <div className='home-icon'>
        <FaHome onClick={onClick} fontSize="3em" />
      </div>
    </>
  )
}

export default HomeIcon;
