import React from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import { 
    Icon
 } from 'semantic-ui-react'




export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className='background-footer' style={{padding: '0.25rem'}}>
                <Container className="mt-2 mb-2">
                    <div>
                        <Row>
                            <Col sm="4"></Col>
                            <Col sm="4"></Col>
                            <Col sm="4">
                                <div style={{display: "inline", marginRight: "1rem"}}>                                
                                    <Icon name="phone" size="small"/>
                                    Hotline: 1900 1500 
                                </div>
                                <div style={{display: "inline"}}>
                                    <Icon name="talk" size="small"/>
                                    Hỗ trợ trực tuyến
                                </div> 
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}
