import React, {Component,PropTypes} from 'react';

import LI from './li'

class UL extends Component {

    render() {
        let {items} = this.props;
        items = items.map((item, index) => <LI key={index} item={item}/>);
        return (
            <ul>
                {items}
            </ul>
        )
    }
}

UL.propTypes = {
    items: PropTypes.array.isRequired
};

export default UL;