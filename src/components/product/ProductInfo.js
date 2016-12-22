/**
 * Created by nowwe on 22/12/2016.
 */
import React, {Component} from 'react'
import {Row, Col, Image,FormGroup,ControlLabel,FormControl} from 'react-bootstrap'
import response from '../../../response/products.json'
import './ProductInfo.scss'

class ProductInfo extends Component {

    constructor(props) {
        super(props)
        console.log('constructor')
        const productId = props.params.id
        console.log('productId ', productId)
        this.state = {foundProduct: null}
    }

    // componentWillReceiveProps(newProps) {
    //     console.log('willReceiveProps', newProps.params.id)
    // }

    componentDidMount() {
        const productId = this.props.params.id === "0" ? 0 : parseInt(this.props.params.id, 10)
        const productsRes = response.products
        const foundProduct = productsRes.find((item) => {
            return item.id === productId
        })
        console.log('foundProduct ', foundProduct)
        this.setState({foundProduct})
    }

    updateQuantity = (e) => {
        console.log(e.target.value)
    }

    render() {
        const {foundProduct} = this.state
        if (foundProduct) {
            return (
                <div id="pdpBLock">
                    <Row>
                        <Col md={4} xs={12} sm={12}>
                            <Image src={foundProduct.url} responsive />
                        </Col>
                        <Col md={8} xs={12} sm={12}>
                            <div className="pdpNameContainer">{foundProduct.title}</div>
                            <div className="pdpPriceContainer">
                                <span className="nowPrice">{foundProduct.newPrice}</span>
                                <span className="wasPrice">{foundProduct.wasPrice}</span>
                            </div>
                            <Row>
                                <Col md={4} xs={12} sm={12}>
                                    <FormGroup controlId="formControlsSelect">
                                        <ControlLabel>Kích thước</ControlLabel>
                                        <FormControl componentClass="select" placeholder="select">
                                            {
                                                foundProduct.size.map((item, index) =>
                                                    <option key={index} value="select">{item}</option>
                                                )
                                            }
                                        </FormControl>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2} xs={12} sm={12}>
                                    <FormGroup controlId="formControlsSelect">
                                        <ControlLabel>Số lượng</ControlLabel>
                                        <input style={{width: '100%'}} onChange={this.updateQuantity}  id="quantity" type="number" name="quantity" min="1" defaultValue={1}/>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="description-container">
                        <Col xs={12} sm={12}>{foundProduct.description}</Col>
                    </Row>
                </div>
            )
        }
        else {
            return (
                <div>Loading...</div>
            )
        }

    }
}

export default ProductInfo