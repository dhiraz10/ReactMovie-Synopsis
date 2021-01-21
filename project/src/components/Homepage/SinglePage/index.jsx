import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { SingleContainer, Img, H2, Paragraph, Overview } from './style';
export default function SingleMoviesPage(props) {
  const [movie, setMovie] = useState({});
  const paramId = props.match.params.id;
  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${paramId}?api_key=02689249b40636b114a2add6006bff65&language=en-US`,
    )
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err));
  });

  // console.log(Array.isArray(movie.genres) && movie.genres.map(el => el));
  return (
    <SingleContainer>
      <Container className='mt-5 wapperStyle'>
        <H2>{movie.title}</H2>
        <Row>
          <Col className='md=6'>
            <Row>
              <Col className='md=6'>
                <Row>
                  <Col className='md=4'>
                    <div className='clearfix mt-5 mb-1 textCenter'>
                      <Overview>Popularity</Overview>
                      <Paragraph>{movie.popularity}</Paragraph>
                    </div>
                  </Col>
                  <Col className='Md=4'>
                    <div className='clearfix mt-5 mb-1 textCenter col-sm '>
                      <Overview>Average Vote</Overview>
                      <Paragraph>{movie.vote_average}</Paragraph>
                    </div>
                  </Col>
                  <Col className='md=4'>
                    <div className='clearfix mt-5 mb-1 textCenter col-sm '>
                      <Overview>Vote Count</Overview>
                      <Paragraph>{movie.vote_count}</Paragraph>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col className='md =6'>
                <Card className='cardstyle'>
                  <Img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.original_title}
                  />
                </Card>
              </Col>
            </Row>
          </Col>
          <Col className='md=6'>
            <div className='clearfix mb-1 col-sm '>
              <Overview className='float-right'>Overview</Overview>
            </div>
            <Paragraph>{movie.overview}</Paragraph>
            <Row>
              <Col className='md=6'>
                <div className='clearfix mt-5 mb-1 ,col-sm '>
                  <Overview className='float-left'>Generes</Overview>
                </div>
                <Paragraph>
                  {' '}
                  {Array.isArray(movie.genres) &&
                    movie.genres.map((el) => (
                      <span className='ml-2' key={Math.random()}>
                        {el.name}
                      </span>
                    ))}
                </Paragraph>
              </Col>
              <Col className='md=6'>
                <div className='clearfix mt-5 mb-1 ,col-sm '>
                  <Overview className='float-left'>Release Date</Overview>
                </div>
                <Paragraph>{movie.release_date}</Paragraph>
              </Col>
            </Row>
            <Row>
              <Col className='md=6'>
                <div className='clearfix mt-5 mb-1 ,col-sm '>
                  <Overview className='float-left'>Revenue</Overview>
                </div>
                <Paragraph>{movie.revenue}</Paragraph>
              </Col>
              <Col className='md= 6'>
                <div className='clearfix mt-5 mb-1 col-sm '>
                  <Overview className='float-left'>Original Language</Overview>
                </div>
                <Paragraph>{movie.original_language}</Paragraph>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </SingleContainer>
  );
}
