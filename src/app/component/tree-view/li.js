import React, {Component,PropTypes} from 'react';

import UL from './ul';

class LI extends Component {

    selectItem() {
        let { selectItem,item,child} = this.props;
        selectItem(item, child);
    }


    getClassName(child, isOpen, activeTab) {
        let className = child ? "child-node" : (isOpen ? "open parent-node" : "parent-node");
        className += activeTab ? ' active' : '';
        return className;
    }

    render() {
        let {item,child, selectItem, openGroups,activeTab} = this.props;
        var isOpen = openGroups.indexOf(item.uuid) !== -1;
        return (
            <li className={this.getClassName(child, isOpen, activeTab === item.uuid)}>
                {!child && item.children ?
                    isOpen ? <i className="fa fa-chevron-down"></i> : <i className="fa fa-chevron-right"></i>
                    : <i className="fa fa-file-o"></i> }
                <a href="javascript:;" onClick={this.selectItem.bind(this)}>
                    {child ? <i className="fa fa-plug"></i> : <i className="fa fa-folder"></i>}
                    {item.name}
                </a>
                {item.children ?
                    <UL
                        activeTab={activeTab}
                        openGroups={openGroups} selectItem={selectItem} child={true} items={item.children}/> : ""}
            </li>
        )
    }
}

LI.propTypes = {
    item: PropTypes.object.isRequired,
    child: PropTypes.bool.isRequired,
    selectItem: PropTypes.func.isRequired
};

export default LI;