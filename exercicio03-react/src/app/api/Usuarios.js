'use client'
import Pagina from '../components/Pagina'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card, ListGroup, Row, Col } from 'react-bootstrap'
import { useRouter } from 'next/navigation'

export default function UsuarioDetalhes({ id }) {
    const [usuario, setUsuario] = useState(null)

    useEffect(() => {
        if (id) {
            axios.get(`https://dummyjson.com/users/${id}`)
                .then(response => {
                    setUsuario(response.data) 
                })
                .catch(error => {
                    console.error("Erro ao buscar os dados do usuário", error)
                })
        }
    }, [id])

    if (!usuario) {
        return <p>Carregando dados...</p> 
    }

    const { firstName, lastName, email, phone, gender, age, birthDate, university, image } = usuario

    return (
        <Pagina>
        <Row className="justify-content-center mt-4">
            <Col xs={12} md={6}>
                <Card>
                    <Card.Img variant="top" src={image} alt={`${firstName} ${lastName}`} />
                    <Card.Body>
                        <Card.Title>{firstName} {lastName}</Card.Title>
                    </Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item><strong>Email:</strong> {email}</ListGroup.Item>
                        <ListGroup.Item><strong>Telefone:</strong> {phone}</ListGroup.Item>
                        <ListGroup.Item><strong>Gênero:</strong> {gender}</ListGroup.Item>
                        <ListGroup.Item><strong>Idade:</strong> {age} anos</ListGroup.Item>
                        <ListGroup.Item><strong>Data de Nascimento:</strong> {birthDate}</ListGroup.Item>
                        <ListGroup.Item><strong>Universidade:</strong> {university}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
        </Pagina>
    )
}
