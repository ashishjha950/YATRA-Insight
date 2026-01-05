import { Router } from 'express'
import { protect } from '../../middlewares/auth.middleware.js'
import { triggerSOS, addEmergencyContact, getEmergencyContacts, deleteEmergencyContact } from './sos.controller.js'

const router = Router()

router.post('/trigger', protect, triggerSOS)
router.post('/emergency', protect, addEmergencyContact);
router.get('/emergency', protect, getEmergencyContacts);
router.delete(
  '/emergency/:id',
  protect, deleteEmergencyContact
);

export default router
