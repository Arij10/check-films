import React,{useState} from 'react'
import {Card,Modal,Button} from 'react-bootstrap' ;
import Rating from './Rating';
function MovieCard ({movie}) {
    function Example() {
        const [smShow, setSmShow] = useState(false);
        const [lgShow, setLgShow] = useState(false);
      
        return (
          <>
            <Button onClick={() => setLgShow(true)}>Trailer</Button>
            <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  {movie.name}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>{movie.trailer}</Modal.Body>
            </Modal>
          </>
        );
      }
    return (
        <div>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.image} />
  <Card.Body>
    <Card.Title>{movie.name}</Card.Title>
    <Card.Text>
     {movie.description}
    </Card.Text>
    <Card.Title><Rating  rate={movie.rating} /></Card.Title>
  </Card.Body>
  <Example />
</Card>  
        </div>
    )
}

export default MovieCard
