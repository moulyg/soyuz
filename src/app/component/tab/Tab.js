import React, {Component} from 'react';
import { connect } from 'react-redux';

import {closeTab,setActiveTab} from '../../action/connectionAction'

import TabMenu from './TabMenu'
import TabPanel from './TabPanel'

class Tab extends Component {

    constructor(props) {
        super(props);
    }

    closeTabEvent(uuid) {
        let {connection ,dispatch} = this.props;
        if (connection.openTabs.length > 1 && uuid === connection.activeTab) {
            this.props.dispatch(setActiveTab(connection.openTabs[0]));
        } else if (connection.openTabs.length === 1) {
            this.props.dispatch(setActiveTab(null));
        }
        dispatch(closeTab(uuid));
    }

    selectTabEvent(uuid) {
        this.props.dispatch(setActiveTab(uuid));
    }

    render() {
        let items = [];
        let {connection,} = this.props;
        console.log(connection);
        return (
            <div className="tab-wrapper">
                <TabMenu
                    connections={connection.connections}
                    closeTab={this.closeTabEvent.bind(this)}
                    selectTab={this.selectTabEvent.bind(this)}
                    items={connection.openTabs}
                    activeTab={connection.activeTab}/>
                <TabPanel
                    items={connection.openTabs}
                    connections={connection.connections}
                    activeTab={connection.activeTab}/>
            </div>
        )
    }
}
export default connect(state => ({
    connection: state.connection.toJS()
}))(Tab);
