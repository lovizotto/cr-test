import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

class Header extends React.PureComponent {
    render() {
        return <h1 {...this.props}/>;
    }
}

Header.propTypes = {
    title: PropTypes.string
};

export default styled(Header)`
    font-size: 48px;
    color: #363636;
    margin: 0;
    font-weight: 600;
`;
