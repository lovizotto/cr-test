import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Currency from "react-currency-formatter";

class Price extends PureComponent {
    render() {
        return <Currency
            quantity={+this.props.value}
            currency="BRL"
            symbol='R$ '
        />
    }
}

Price.propTypes = {
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
};

export default Price;