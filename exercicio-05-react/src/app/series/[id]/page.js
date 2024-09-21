'use client'

import ApiSeries from "@/app/apis/ApiSeries"
import Pagina from "@/app/components/Pagina"
import { useEffect, useState } from "react"
import { Card, Col, Row } from "react-bootstrap"

export default function page(props) {
    const id =props.params.id
    const [serie,setSeries] = useState([])
    
    useEffect(()=>{
     BuscarSerie()
    },[])

    async function BuscarSerie(){
  const resultado = await ApiSeries.get('/tv/'+ id + '?language=pt-BR')
  const seriesRecebidas = resultado.data
  console.log(seriesRecebidas)
  setSeries(seriesRecebidas)
    }
  return (
    <>
    <Pagina titulo ={serie.name} >
        {serie.id &&(
           <Row className="mt-02" >
           <Col md={4} >
             <Card.Img src ={"https://image.tmdb.org/t/p/w500/" + serie.poster_path} />
           </Col>
            <Col m={6}>
              <p><b>Lançamento:</b>{serie.first_air_date} </p>
              <p><b>Nota:</b>{serie.vote_average} ⭐</p>
              <p><b>Temporadas:</b>{serie.number_of_seasons} </p>
              <p><b>Episodios:</b>{serie.number_of_episodes} </p>
              <p><b>Generos:</b></p>
              <ul>
                {serie.genres.map(item => {
                    return <li>{item.name} </li>
                })}
              </ul>
              <p><b>Sinopse:</b>{serie.overview} </p>
              <p><b></b></p>
            </Col>
       </Row> 
        )}
        

    </Pagina>
    </>
  )
}
