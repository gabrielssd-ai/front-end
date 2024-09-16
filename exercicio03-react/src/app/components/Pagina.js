
'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Pagina(props) {

    return (
        <>

            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">MeuAPP</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/fundamentos">Fundamentos</Nav.Link>
                        <Nav.Link href="/api">Api's</Nav.Link>
                        <Nav.Link href="/api/[id]">Usuario id</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div className='bg-secondary text-white text-center py-2'>
                <h1>{props.titulo}</h1>
            </div>

            <Container>
                {props.children}
            </Container>


        </>
    )
}