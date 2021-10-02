import { createRouter } from 'vue-router'
import before from './beforeeach'
import routes from './routes'

const router = createRouter({ routes })

router.beforeEach(before)

export default router
