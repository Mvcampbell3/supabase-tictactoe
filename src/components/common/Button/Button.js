import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import React from 'react'

/*
    This is a wrapper for the BootStrap Button
    created for PropTyping and handleClick functionality
*/

const myButton = ({
    handleClick = () => {},
    children,
    type = 'button',
    variant = 'primary',
}) => {
    return (
        <Button onClick={handleClick} type={type} variant={variant}>
            {children}
        </Button>
    )
}

myButton.propTypes = {
    // React children in this case will always be a string
    children: PropTypes.string,
    // handleClick functionality
    handleClick: PropTypes.func,
    // button type: 'button', 'submit' ...
    type: PropTypes.string,
    // boostrap variant: 'primary', 'secondary' ...
    variant: PropTypes.string,
}

export { myButton }
