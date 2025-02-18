import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SemesterRegistrationValidation } from './semesterRegistration.validation';
import { SemesterRegistrationControllers } from './semesterRegistration.controller';
import { USER_ROLE } from '../user/user.constant';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('/create-semester-registration',
  auth(USER_ROLE.superAdmin,USER_ROLE.admin),
  validateRequest(SemesterRegistrationValidation.createSemesterRegistrationValidationSchema),SemesterRegistrationControllers.createSemesterRegistration
);
router.get(
  '/:id',
  auth(USER_ROLE.superAdmin,USER_ROLE.admin,USER_ROLE.faculty,USER_ROLE.student),
 SemesterRegistrationControllers.getSingleSemesterRegistration
);

router.patch(
  '/:id',
  auth(USER_ROLE.superAdmin,USER_ROLE.admin),
  validateRequest(
  SemesterRegistrationValidation.updateSemesterRegistrationValidationSchema
  ),
 SemesterRegistrationControllers.updateSemesterRegistration
);

router.get('/',
  auth(USER_ROLE.superAdmin,USER_ROLE.admin,USER_ROLE.faculty,USER_ROLE.student),
  SemesterRegistrationControllers.getAllSemesterRegistrations);

export const SemesterRegistrationRoutes = router;
