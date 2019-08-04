import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card, CardText, CardBody,
    CardTitle, CardSubtitle,CardImg } from 'reactstrap';
import { Label} from 'semantic-ui-react'




export default class ItemProduct extends React.Component {
    constructor(props) {
        super(props);
        this.modifyString =this.modifyString;
    }
    modifyString(str){
        return str.slice(0,60) + "...";
    }
    render(){
        let url_item = "/detail/" + this.props.product._id 
        return (
            <Col className="border-button" sm="12" md="3" style={{ marginBottom: "1rem"}} >
                <Link className="cus-link" to={url_item}>
                    <Card style={{ border: "none" }}>
                        <CardImg top src={this.props.product.image} alt="Card image cap" />
                        <CardBody style={{ textAlign: "center" }}>
                            <CardTitle><h5>{this.props.product.name}</h5></CardTitle>
                            <CardSubtitle className="text-muted">{this.props.product.author}</CardSubtitle>
                            <CardText>{this.props.product.newprice}đ</CardText>
                            <CardText><strike>{this.props.product.oldprice}đ</strike><Label color='red'>-20%</Label></CardText>
                        </CardBody>
                    </Card>
                </Link>
            </Col>
        )
    }
}

