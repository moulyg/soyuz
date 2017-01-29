import React, {Component,PropTypes} from 'react';

import LI from './li'

class UL extends Component {

    render() {
        let {items,child} = this.props;
        items = items.map((item, index) => <LI key={index} child={child} item={item}/>);
        return (
            <ul>
                {items}
            </ul>
        )
    }
}

UL.propTypes = {
    items: PropTypes.array.isRequired,
    child: PropTypes.bool.isRequired
};

export default UL;