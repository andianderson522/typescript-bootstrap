import { Router } from 'express';
import * as pingController from '../../controllers/ping-controller';

const router = Router();

router.get('/', pingController.getPing);

export default router;
