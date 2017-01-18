import san from 'san'

// style
require('font-awesome/css/font-awesome.min.css')
require('./main.less')
require('weui')

// route
import ButtonView from './view/button'

import {router} from 'san-router'

router.add({rule: '/', Component: ButtonView, target: '#app'});

// start
router.start()
