import React, {Component} from 'react';


class TabMenu extends Component {


    closeTab(item) {
        let {closeTab} = this.props;
        closeTab(item.uuid)
    }

    selectTab(connection) {
        let {selectTab} = this.props;
        selectTab(connection.uuid);
    }

    render() {
        let {items,activeTab,connections} = this.props;
        let tabs = items.map((item, index) => {
            var connection = {};
            if (connections && connections.length > 0) {
                connections.forEach((group) => {
                    if (group.children && group.children.length > 0) {
                        group.children.forEach((cnx) => {
                            if (cnx.uuid === item) {
                                connection = cnx;
                            }
                        });
                    }
                });
            }
            return (<li
                onClick={this.selectTab.bind(this, connection)}
                key={index}
                className={activeTab === connection.uuid ? 'active' : ''}>
                <a href="javascript:;">{connection.name}
                    <span className="close fa fa-times" onClick={this.closeTab.bind(this,connection)}></span>
                </a>
            </li>)
        });
        return (
            <ul className="tab-menu">
                {tabs}
            </ul>
        )
    }
}

TabMenu.defaultProps = {
    openTabs: []
};

export default TabMenu;