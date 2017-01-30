import React, {Component} from 'react';

import TabMenu from './TabMenu'
import TabPanel from './TabPanel'

class Tab extends Component {


    render() {
        let items = [];
        return (
            <div className="tab-wrapper">
                <TabMenu items={items}/>
                <TabPanel items={items}/>
            </div>
        )
    }
}

export default Tab;