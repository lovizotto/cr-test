import React, {PureComponent} from 'react';
import {ProductCard} from "../components";
import styled from 'styled-components';
import {addProduct} from "../actions";
import {connect} from 'react-redux';

class ProductList extends PureComponent {

    render() {
        console.log(this.props.productList);
        return (
            <div className={this.props.className}>
                {this.props.productList.map(product =>
                    <ProductCard key={product.id}
                                 {...product}
                                 onClick={() => this.props.addProduct(product)}/>
                )}
            </div>
        );
    }
}

ProductList.propTypes = {};

const StyledProductList = styled(ProductList)`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: center;
  
  ${ProductCard} {
    flex: 1;
    flex-basis: 100%;
    
    @media screen and (min-width: 768px) {
      flex-basis: 50%;  
      justify-content: flex-start;
    }
    
    @media screen and (min-width: 992px) {
      flex-basis: 33.33%;
       
    }
    
    @media screen and (min-width: 1200px) {
      flex-basis: 25%;  
     
    }
  }
`;


const mapStateToProps = state => ({
    productList: state.productList
});

const mapDispatchToProps = dispatch => ({
    addProduct: (product) => dispatch(addProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(StyledProductList);