import React from 'react';
import styled from 'styled-components';
import Header from "../components/Header";
import {ProductList} from "../containers";
import ShoppingCart from "../containers/ShoppingCart";
import {Provider} from 'react-redux';
import store from '../store';
import Filter from "../containers/Filter";

window.store = store;


class App extends React.PureComponent {


    render() {
        return (
            <Provider store={store}>
                <main className={this.props.className}>
                    <div className='app__contents'>
                        <header>
                            <Header title='Games'>Games</Header>
                            <Filter/>
                        </header>

                        <ProductList/>

                    </div>
                    <aside className='app__cart'>
                        <ShoppingCart/>
                    </aside>
                </main>
            </Provider>
        );
    }
}


export default styled(App)`

  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 15px;
  }
  
  @media screen and (min-width: 992px) {
    width: 992px;
    padding: 0;
    flex-direction: row;
  }
  
  @media screen and (min-width: 1200px) {
    width: 1170px;
  }
  
  .app__contents {
    margin-top: 20px;
    flex: 1;
    
    @media screen and (min-width: 992px) {
      flex-basis: 66.66%;
      margin-top: 42px;
    }
  
    @media screen and (min-width: 1200px) {
      flex-basis: 75%;
    }
    
    & > header {
      padding: 0 20px 40px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
   
  }
  
  .filter {
    width: 33%;
  }
  
  .app__cart {
    box-sizing: border-box;
    flex: 1;
    flex-basis: 100%;
    padding: 42px 15px;
    height: 474px;
    
    @media screen and (min-width: 992px) {
      flex-basis: 33.33%;
    }
    
    @media screen and (min-width: 1200px) {
      flex-basis: 25%;
    }
  
  }
  
  .text-accent-blue {
    color: #3487DC;
    font-weight: 600;
  }
`;
