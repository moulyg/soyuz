import React, {Component} from 'react';


class TabMenu extends Component {


    render() {

        return (
            <ul className="tab-menu">
                <li><a href="javascript:;">Tab 01</a></li>
                <li className="active"><a href="javascript:;">Tab 02</a></li>
            </ul>
        )
    }
}

export default TabMenu;