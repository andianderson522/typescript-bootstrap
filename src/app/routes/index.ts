import { Router } from 'express';
import rootRoutes from './root-routes';
import pingRoutes from './ping-routes';

const router = Router();

router.use('/', rootRoutes);
router.use('/ping', pingRoutes);

export default router;
