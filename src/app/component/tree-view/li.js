import React, {Component,PropTypes} from 'react';

import UL from './ul';

class LI extends Component {

    render() {
        let {item} = this.props;
        return (
            <li className="tree-view">
                <a href="javascript:;">{item.name}</a>
                {item.children ? <UL items={item.children}/> : ""}
            </li>
        )
    }
}

LI.propTypes = {
    item: PropTypes.object.isRequired
};

export default LI;