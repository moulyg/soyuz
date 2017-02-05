import React, {Component} from 'react';
import storage from 'electron-storage';
import { connect } from 'react-redux';
import electron from 'electron';

import SideBar from '../component/side-bar';
import Tab from '../component/tab';




import {loadConnections} from '../action/connectionAction.js';

class Home extends Component {

    constructor(props) {
        super(props);
    }


    componentWillMount() {
        let {dispatch} =this.props;
        storage.get('connection', (err, data) => {
            if (err) {
                console.error(err)
            } else {
                let connections = (data.connections);
                dispatch(loadConnections(connections));
            }
        });
    }

    render() {
        return (
            <div className="clearfix">
                <SideBar />
                <Tab />
            </div>
        )
    }
}
export default connect(state => ({}))(Home);

