import React from 'react'

const Button = ({
    buttonName,
    className,
    onClick,
    children
}) => {
  return (
    <button 
        className={className}
        onClick={onClick}>
            {buttonName}
            {children}
    </button>
  )
}

export default Button