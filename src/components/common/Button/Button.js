import Button from 'react-bootstrap/Button'
import React from 'react'

const myButton = ({
    handleClick = () => {},
    children,
    type = 'button',
    variant = 'primary',
}) => {
    return (
        <Button onClick={handleClick} type={type} varaiant={variant}>
            {children}
        </Button>
    )
}

export { myButton }
