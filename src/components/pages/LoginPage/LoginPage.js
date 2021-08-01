import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Input from '../../common/Button/Input';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '../../common/Button';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const sendObj = {
            email,
            username,
            password,
        };
        console.log({ sendObj });
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
                                inputType="password"
                                value={password}
                                setValue={(e) => setPassword(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Button type="submit">Submit</Button>
                </Form>
            </Container>
        </div>
    );
};

export default LoginPage;
