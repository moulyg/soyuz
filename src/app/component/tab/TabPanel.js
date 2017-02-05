import React, {Component} from 'react';

class TabPanel extends Component {

    render() {
        let {items,connections,activeTab} = this.props;

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
            return <div
                className={activeTab === connection.uuid ? 'active tab-panel' : 'tab-panel'}
                key={index}>
                {connection.name}
            </div>
        });

        return (
            <div className="tab-panels">
                {tabs}
            </div>
        )
    }
}

export default TabPanel;