import './App.scss'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function App() {
    return (
        <div className="App">
            <Container className="mellow-yellow">
                <Button type="button" variant="primary">
                    Click
                </Button>
            </Container>
        </div>
    )
}

export default App
