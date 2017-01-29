import React from 'react';
import { render } from 'react-dom';

import SideBar from './component/side-bar';

let mainElement = document.getElementById('main');
render(
    <div>
        <SideBar />
    </div>,
    mainElement
);