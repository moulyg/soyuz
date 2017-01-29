import React, {Component} from 'react';

import TreeView from '../tree-view'

class SideBar extends Component {


    render() {
        let items = [
            {name: "Connection 1"},
            {
                name: "Connection 2",
                children: [
                    {name: "Connection 21"},
                    {name: "Connection 22"}
                ]
            },
            {name: "Connection 3"},
            {name: "Connection 4"},
            {name: "Connection 5"}
        ];

        return (
            <aside>
                <TreeView items={items}/>
            </aside>
        )
    }
}

export default SideBar;