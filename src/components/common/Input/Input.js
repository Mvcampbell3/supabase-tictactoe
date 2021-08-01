import React from 'react';
import Form from 'react-bootstrap/Form';

const Input = ({
    inputType = 'text',
    label = '',
    value = '',
    setValue = () => {},
}) => {
    const { Group, Label, Control } = Form;
    return (
        <Group>
            <Label>{label}</Label>
            <Control type={inputType} value={value} onChange={setValue} />
        </Group>
    );
};

export default Input;
