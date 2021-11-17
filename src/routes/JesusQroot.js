import { Router } from 'express'

import logger from '../utils/logger'

const router = Router()

router.get('/', (req, res) => {
  logger.log.success('Calling JesusQRoot')
  res.send({ msg: 'Hello Jesus' })
})

export default router
