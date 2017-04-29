'use strict';

import React from 'react';
import { render } from 'react-dom';

import './scss/base.scss';
import './scss/lib/_theme.scss';

window.React = React;

render (
    <Contact />,
    document.getElementById('root')
)


