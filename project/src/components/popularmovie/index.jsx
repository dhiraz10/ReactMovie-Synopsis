import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Link } from "react-router-dom";
import {Container,Card,Col} from "react-bootstrap";

const PopularMovie = ( { movie } ) => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySeed: 3000,
        draggable: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    return (
        <Container id="popularmovie">
     <div className="clearfix mt-5 mb-1 ,col-sm ">
           <h4 className="float-left heading" 
            >Popular Movies </h4>
       </div>

          <Slider {...settings}>
            { movie.map (( movie )=>{
                return( 
                    <Link to={`/movies/${movie.id}`} className="link" key= {movie.id}>
                    <Col  >
           <Card className="cardstyle" >
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className= "imgstyle" />
                <Card.Body>
                  <Card.Title   >{movie.title}</Card.Title>
                </Card.Body>
                </Card>
            </Col>  
            </Link>
                 
                )

            })}
            </Slider>
        </Container>
    )
}

export default PopularMovie
 