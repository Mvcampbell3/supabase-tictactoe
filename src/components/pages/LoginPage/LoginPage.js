import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Input from '../../common/Input';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../../common/Button';
import { testGet } from '../../../utils/API';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const sendObj = {
            email,
            username,
            password,
        };
        console.log({ sendObj });
        testGet()
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log({ err });
            });
    };

    const toggleDisplayPassword = (e) => {
        e.preventDefault();
        console.log('clicked toggle password');
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-page-container">
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Input
                                label="Email"
                                inputType="email"
                                value={email}
                                setValue={(e) => setEmail(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input
                                label="Username"
                                inputType="text"
                                value={username}
                                setValue={(e) => setUsername(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input
                                label="Password"
                                inputType={showPassword ? 'text' : 'password'}
                                value={password}
                                setValue={(e) => setPassword(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Button type="submit">Submit</Button>

                    {/* Move this action to icon inside of password input */}
                    <Button
                        type="button"
                        variant="light"
                        handleClick={toggleDisplayPassword}
                    >
                        Show Password
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default LoginPage;
