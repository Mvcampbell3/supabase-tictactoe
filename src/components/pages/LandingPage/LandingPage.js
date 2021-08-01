import React from 'react';
import Container from 'react-bootstrap/Container';
import './LandingPage.scss';
import Button from '../../common/Button';

const LandingPage = () => {
    return (
        <div className="landing-page-background">
            <Container fluid={'sm'}>
                <h1 className="">This is the landing page</h1>
                <Button type="button" variant="primary">
                    Click
                </Button>
            </Container>
        </div>
    );
};

export default LandingPage;
