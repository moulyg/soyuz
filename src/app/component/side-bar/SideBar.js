import React, {Component} from 'react';
import { connect } from 'react-redux';

import {openNewTab, setActiveTab} from '../../action/connectionAction';

import TreeView from '../tree-view';

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {openGroups: []};
    }

    selectItem(item, child) {
        let {openGroups} = this.state;
        let {dispatch} = this.props;
        if (!child) {
            if (openGroups.indexOf(item.uuid) === -1) {
                openGroups.push(item.uuid)
            } else {
                openGroups.splice(openGroups.indexOf(item.uuid), 1);
            }
        } else {
            dispatch(openNewTab(item.uuid));
            dispatch(setActiveTab(item.uuid));
        }
        this.setState({openGroups});
    }

    render() {
        let {connections, activeTab} = this.props.connection;
        let {openGroups} = this.state;
        return (
            <aside>
                <TreeView
                    activeTab={activeTab}
                    openGroups={openGroups}
                    selectItem={this.selectItem.bind(this)}
                    items={connections}/>
            </aside>
        )
    }
}

export default connect(state => ({
    connection: state.connection.toJS()
}))(SideBar);
