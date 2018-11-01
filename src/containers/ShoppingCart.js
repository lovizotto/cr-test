import React, {PureComponent} from 'react';
import {Mock} from "../services";
import {Button, CartItem} from "../components";
import styled from 'styled-components';
import Price from "../components/Price";
import {connect} from 'react-redux';
import {removeProduct} from '../actions';

class ShoppingCart extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            subtotal: 0,
            shippingPrice: 0,
            total: 0
        }
    }


    render() {
        let subtotal = 0;
        let frete = this.props.shoppingCart.length * 10;
        if (this.props.shoppingCart.length) {
            this.props.shoppingCart.forEach( product => {
                subtotal += product.price
            });
        }

        let total = subtotal + frete;
        frete = total > 250 ? 0 : frete;

        return (
            <div className={this.props.className}>
                <header>
                    <h3>Carrinho <span className='cart__items-counter'>({this.props.shoppingCart.length} itens)</span></h3>
                </header>
                <div className='cart__list'>
                    {this.props.shoppingCart.map((product) =>
                        <CartItem key={product.id}
                                  {...product}
                                  onRemove={(id) => this.props.removeProduct(id)}/>
                    )}
                </div>
                <div className='cart__resume'>
                    <div>
                        <label>Subtotal</label>
                        <Price value={subtotal}/>
                    </div>
                    <div>
                        <label>Frete</label>
                        <Price value={frete}/>
                    </div>
                    <div>
                        <label>Total</label>
                        <Price value={total}/>
                    </div>
                </div>
                <div className='cart__checkout'>
                    <Button>finalizar compra</Button>
                </div>
            </div>
        );
    }
}

ShoppingCart.propTypes = {};

const StyledShoppingCart = styled(ShoppingCart)`
    position: -webkit-sticky;
    position: sticky;
    border: 1px solid #E1E1E1;
    border-radius: 3px;
    padding: 20px;
  
    h3 {
      color: rgba(54, 54, 54, 1);
      font-size: 18px;
      margin: 0;
    }
    
    .cart__items-counter {
      font-size: 14px;
      color: rgba(127, 117, 117, 1);
      font-weight: normal;
    }
    
    ${Button} {
        margin-left: -10px;
        margin-right: -10px;
        margin-bottom: -10px;
        margin-top: 20px;
        width: calc(20px + 100%);
    }
    
    .cart__resume {
      margin-top: 10px;
    }
    
    .cart__resume > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
    }
    
`;

const mapStateToProps = state => ({
    shoppingCart: state.shoppingCart
});

const mapDispatchToProps = dispatch => ({
    removeProduct: (productId) => dispatch(removeProduct(productId))
});

export default connect( mapStateToProps, mapDispatchToProps)(StyledShoppingCart)