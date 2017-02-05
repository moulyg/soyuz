import React, {Component,PropTypes} from 'react';

import UL from './ul';

class TreeView extends Component {

    render() {
        let {items,selectItem, openGroups,activeTab } = this.props;
        return (
            <div className="tree-view">
                <UL activeTab={activeTab} openGroups={openGroups} selectItem={selectItem} child={false} items={items}/>
            </div>
        )
    }
}

TreeView.propTypes = {
    items: PropTypes.array.isRequired,
    selectItem: PropTypes.func.isRequired
};

export default TreeView;