import React, { Component } from "react";
import './style.css';
// could be sorted alphabetically
import {
    CardBody,
    CardImg,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Input,
    ListGroup,
    ListGroupItem,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
 } from "reactstrap";
 import SobreText from './SobreText';
import SobreHeader from './SobreHeader';

class SobreNosotros extends Component {

    state = {
        sobreheaders: SobreText
      };

    render() {
        return(


            <div>
                           {/* <div className="row align-items-center justify-content-center">
                <div className="col-md-7 text-center" data-aos="fade">
                <div className="container">
                  <h1><strong>¿Quienes somos?</strong></h1>
             <img className="QuienesPic" src="/images/Quienes.jpg"></img>

              </div>
            </div>
          </div>  */}
          <Container className="Sobre Nosotros faq-container text-center">
          <Row>
            <Col>
              <h1><strong>Sobre Nosotros</strong></h1>
              <br></br>
              <br></br>
            </Col>
          </Row>

          <Row>
            <Col>
              {/* Render Sobre Nostros here */}
              <ul className="sobre-nostros">
                {Object.keys(this.state.sobreheaders).map(key =>
                  <SobreHeader 
                    key={key}
                    sobreheaders={this.state.sobreheaders[key]}
                  />
                )}
              </ul>
            </Col>
          </Row>
        </Container>
          </div>  



        )
    }
}

export default (SobreNosotros);