import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Price from "./Price";

const assetsImages = '/products/images/';

class ProductCard extends PureComponent {

    _addProduct = () => {
        this.props.onClick(this.props.id)
    };

    render() {
        return (
            <div className={this.props.className} onClick={this._addProduct}>
                <div className='card__image'>
                    <figure>
                        <img src={assetsImages + this.props.image} alt={this.props.name}/>
                    </figure>
                </div>

                <div className='card__label'>
                    <div className='card__label-price'>
                        <span>{this.props.name}</span>
                        <span className='text-accent-blue'>
                            <Price value={this.props.price}/>
                        </span>
                    </div>
                    <div className='card__label-submit'>
                        <span className='text-accent-blue'>adicionar ao carrinho</span>
                    </div>
                </div>

            </div>
        );
    }
}

ProductCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    image: PropTypes.string
};

ProductCard.defaultProps = {
    image: 'http://placehold.it/200x200',
    onClick: f => f
};

export default styled(ProductCard)`
  cursor: pointer;
  box-sizing: border-box;
  margin: 0 15px 24px;
  max-width: 320px;
  
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(0,0,0,0);
  
  transition: border .2s, box-shadow .3s;
  
  &:hover {
    border: 1px solid rgba(0, 0, 0, .05);
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    
    .card__label-price {
      opacity: 0;
      transform: translate3D(0, -50px, 0);
    }
    
    .card__label-submit {
      opacity: 1;
      transform: translate3D(0, 0, 0);
    }
  }
  
  .card__image {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EEEEEE;
    height: 230px;
    border-radius: 3px;
  }
  
  .card__label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 12px auto;
    text-align: center;
    overflow: hidden;
    
    span {
      display: block;
    }
  }
  
  .card__label-submit {
    position: absolute;
    opacity: 0;
    transition: opacity .3s, transform .2s;
    transform: translate3D(0, 50px, 0);
  }
  
  .card__label-price {
      opacity: 1;
      transition: opacity .3s, transform .2s;
   }
    
`;