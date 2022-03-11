import { body } from 'express-validator';

export default function validateBody(type: string) {
    switch (type) {
      case 'signUp':
        return [
          body('username').notEmpty().isLength({min: 5}),
          body('email').notEmpty().normalizeEmail().isEmail(),
          body('password').isString().isLength({ min: 8}),
          body('birthdate').exists().isISO8601(),
          body('name').notEmpty().isString(),
          body('family_name').notEmpty().isString()
        ]
      case 'signIn':
        return [
          body('username').notEmpty().isLength({min: 5}),
          body('password').isString().isLength({ min: 8}),
        ]
      case 'verify':
        return [
          body('username').notEmpty().isLength({min: 5}),
          body('code').notEmpty().isString().isLength({min: 6, max: 6})
        ]
      case 'forgotPassword':
        return [
          body('username').notEmpty().isLength({ min: 5}),
        ]
      case 'confirmPassword':
        return [
          body('password').exists().isLength({ min: 8}),
          body('username').notEmpty().isLength({ min: 5}),
          body('code').notEmpty().isString().isLength({min: 6, max: 6})
        ]
    }
  }