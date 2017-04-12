import san from 'san'

// style
require('font-awesome/css/font-awesome.min.css')
require('./main.less')
require('weui')

// route
import ButtonView from './view/button'
import ListView from './view/list'
import CellView from './view/cell'
import IndexView from './view/index'

import {
    router
} from 'san-router'

router.add({
    rule: '/',
    Component: IndexView,
    target: '#app'
});
router.add({
    rule: '/button',
    Component: ButtonView,
    target: '#app'
});
router.add({
    rule: '/list',
    Component: ListView,
    target: '#app'
});
router.add({
    rule: '/cell',
    Component: CellView,
    target: '#app'
});

// start
router.start()
