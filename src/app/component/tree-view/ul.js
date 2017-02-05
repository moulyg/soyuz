import React, {Component,PropTypes} from 'react';

import LI from './li'

class UL extends Component {

    render() {
        let {items,child,selectItem,openGroups,activeTab} = this.props;
        items = items.map((item, index) => <LI
            selectItem={selectItem}
            key={index}
            activeTab={activeTab}
            child={child}
            openGroups={openGroups}
            item={item}/>);
        return (
            <ul>
                {items}
            </ul>
        )
    }
}

UL.propTypes = {
    items: PropTypes.array.isRequired,
    child: PropTypes.bool.isRequired,
    selectItem: PropTypes.func.isRequired
};

export default UL;