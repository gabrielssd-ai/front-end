'use client'
import { useEffect, useState } from "react";
import Pagina from "../components/Pagina";
import ApiSeries from "../apis/ApiSeries";
import { Button, Card, Col, Row } from "react-bootstrap";


export default function page() {
    const [series, setSeries]= useState([])

    useEffect (()=> {
        BuscarSerie()
    },[])

    async function BuscarSerie(){
        const resultado = await ApiSeries.get("/tv/popular?language=pt-BR")
        const seriesRecebidas = resultado.data.results
        console.log(seriesRecebidas)
        setSeries(seriesRecebidas)
    }

  return (
    <>
    <Pagina titulo="Series Populares" >
         <Row md={4}>
           {series.map(serie=> {
            return(
                <Col className="py-2">
                    <Card style={{ height: '100%' }}>
                       <Card.Img src= {"https://image.tmdb.org/t/p/w500/" + serie.poster_path} />
                         <Card.Body>
                          <Card.Title>{serie.name} </Card.Title>
                          <p><b>Nota:</b>{serie.vote_average}⭐ </p>
                         </Card.Body>
                          <Card.Footer className="text-end">
                             <Button href={"/series/" + serie.id} >Detalhes</Button>
                          </Card.Footer>

                    </Card>
                
                </Col>
            )
           })}

         </Row>

    </Pagina>
    </>
  )
}
