import {Router} from 'express';
import {getAll, create, remove} from '../controllers/servers.js';

const router = Router()

// router.get('/api/server', (req, res) => {
//   res.json({test: 42})
// })

router.get('/api/server', getAll)

router.post('/api/server', create)

router.delete('/api/server/:id', remove)

// router.put  - частично обновлять данные
// router.patch  - частично обновлять значения

export default router