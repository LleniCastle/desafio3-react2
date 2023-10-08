import React from "react";
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "../App.css"


const Home = () => {

    return <div className="home">
        <Container >
            <Row className="justify-content-md-center ">
                <Badge pill bg="warning">Bienvenido Maestro Pokemón</Badge>
            </Row>
        </Container>
    </div>;
};

export default Home;
