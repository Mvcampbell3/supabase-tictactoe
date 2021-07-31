import './App.scss'
import Button from './components/common/Button'
import Container from 'react-bootstrap/Container'

function App() {
    const buttonClick = () => {
        console.log('clicked')
    }
    return (
        <div className="App">
            <Container className="mellow-yellow">
                <Button
                    handleClick={buttonClick}
                    type="button"
                    variant="danger"
                >
                    Click
                </Button>
            </Container>
        </div>
    )
}

export default App
