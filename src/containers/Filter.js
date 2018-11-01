import React, {PureComponent} from 'react';

import Select from 'react-select';
import {filterProduct} from '../actions';
import {connect} from "react-redux";
import styled from 'styled-components';

const filterOptions = [
    { value: 'price', label: 'Preço' },
    { value: 'score', label: 'Popularidade' },
    { value: 'name', label: 'Nome' }
];

class Filter extends PureComponent {
    render() {
        return (
            <Select className='filter'
                    options={filterOptions}
                    onChange={(item)=> this.props.filterProduct(item.value)}/>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    filterProduct: (filter) => dispatch(filterProduct(filter))
});

export default connect(null, mapDispatchToProps)(Filter);
