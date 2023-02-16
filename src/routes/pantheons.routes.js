import {Router} from 'express'
import {createPanth, getPanth } from '../controllers/pantheons.controller.js'
const router = Router()

router.get
(
    '/pantheons',
    getPanth  
)

router.post
(
    '/pantheons',
    createPanth  
)

router.get
(
    '/pantheons',
   // getPanth  
)

router.delete
(
    '/pantheons',
   // getPanth  
)

router.put
(
    '/pantheons',
   // getPanth  
)



export default router