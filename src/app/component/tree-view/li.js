import React, {Component,PropTypes} from 'react';

import UL from './ul';

class LI extends Component {

    render() {
        let {item,child} = this.props;
        return (
            <li className={ child?"child-node" : "parent-node"}>
                {child ? '' : <i className="fa fa-chevron-right"></i>}
                <a href="javascript:;">
                    {child ? <i className="fa fa-plug"></i> : <i className="fa fa-folder"></i>}
                    {item.name}
                </a>
                {item.children ? <UL child={true} items={item.children}/> : ""}
            </li>
        )
    }
}

LI.propTypes = {
    item: PropTypes.object.isRequired,
    child: PropTypes.bool.isRequired
};

export default LI;