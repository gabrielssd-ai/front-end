'use client'

import ApiSeries from "@/app/apis/ApiSeries"
import Pagina from "@/app/components/Pagina"
import { useEffect, useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"

export default function page() {
    const [series, setSeries]= useState([])
    useEffect(()=>{
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
    <Pagina>
       <Row md={4} >
          {series.map(serie=>{
            return (
                <Col className = "py-2">
                  <Card style={{ height: '100%' }}>
                     <Card.Img src={"https://image.tmdb.org/t/p/w500/" + serie.poster_path} />
                      <Card.Body>
                        <Card.Title>{serie.name} </Card.Title>
                        <p><b>Nota: {serie.vote_average} ⭐</b></p>
                      </Card.Body>
                      <Card.Footer className="text-end">
                        <Button href={"/series/" + serie.id} >Detalhes:</Button>
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
