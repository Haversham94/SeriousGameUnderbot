'use strict';

import {
    Router
}
from 'express';
import * as controller from './level.controller';
import * as auth from '../../auth/auth.service';


var router = new Router();

router.get('/', auth.hasRole('user'), controller.index);


export default router;
