import React, {Component,PropTypes} from 'react';

import UL from './ul';

class TreeView extends Component {

    render() {
        let {items} = this.props;
        return (
            <div className="tree-view">
                <UL child={false} items={items}/>
            </div>
        )
    }
}

TreeView.propTypes = {
    items: PropTypes.array.isRequired
};

export default TreeView;