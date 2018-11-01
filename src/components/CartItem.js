import React, {PureComponent} from 'react';
import styled from 'styled-components';
import Price from "./Price";
import {RoundedButton} from './';

class CartItem extends PureComponent {

    _removeItem = () => {
        this.props.onRemove(this.props.id)
    };

    render() {
        return (
            <div className={this.props.className}>
                <div className='cart-item__image'>
                    <img src={'/products/images/' + this.props.image}/>
                </div>
                <div className='cart-item__labels'>
                    <span className='cart-item__name'>{this.props.name}</span>
                    <span className='cart-item__price'><Price value={this.props.price}/></span>
                </div>
                <RoundedButton onClick={this._removeItem}>X</RoundedButton>
            </div>
        );
    }
}

CartItem.propTypes = {};

const StyledCartItem = styled(CartItem)`
    display: flex;
    box-sizing: border-box;
    height: 54px;
    margin: 20px 0;
    line-height: 19px;
    
    align-items: center;
    cursor: pointer;
    
    transition: opacity .2s;
    
    ${RoundedButton} button {
      opacity: 0;
      transition: opacity .2s, transform;
    }
    
    &:hover {
      ${RoundedButton} button {
         opacity: 1;
      }
    }
    
    .cart-item__labels {
      flex-basis: 75%;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
    }
    
    .cart-item__image {
      flex-basis: 25%;
      box-sizing: border-box;
      padding: 4px;
      display: flex;
      border-radius: 3px;
      align-items: center;
      justify-content: center;
      background-color: rgba(238, 238, 238, 1);
      
      img {
        max-width: 41px;
        height: 42px;
      }
    }
    
    .cart-item__name {
      font-size: 14px;
      display: block;
    }
    
    .cart-item__price {
      display: block;
      color: rgba(66, 59, 59, 1);
      font-size: 14px;
      font-weight: bold;
    }
`;

export default StyledCartItem;