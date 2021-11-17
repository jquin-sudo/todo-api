import { Router } from 'express'

import root from './JesusQroot'
import api from './api'

const router = Router()

router.use(root)
router.use('/api', api)

export default router
