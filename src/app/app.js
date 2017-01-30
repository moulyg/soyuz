import React from 'react';
import {render} from 'react-dom';

import SideBar from './component/side-bar';
import Tab from './component/tab';

let mainElement = document.getElementById('main');
render(
    <div className="clearfix">
        <SideBar />
        <Tab />
    </div>,
    mainElement
);