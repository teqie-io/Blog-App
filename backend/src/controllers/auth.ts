import { Request, Response } from 'express'
import Cognito from '../services/cognito';
import { validationResult } from 'express-validator';


// Signup new user
export const signUp = (req: Request, res: Response) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(422).json({ errors: result.array() });
  }
  console.log(req.body)
  const { username, password, email, birthdate, name, family_name } = req.body;
  let userAttr = [];
  userAttr.push({ Name: 'email', Value: email});
  userAttr.push({ Name: 'birthdate', Value: birthdate.toString()});
  userAttr.push({ Name: 'name', Value: name});
  userAttr.push({ Name: 'family_name', Value: family_name});


  let cognitoService = new Cognito();
  cognitoService.signUpUser(username, password, userAttr)
    .then(success => {
      success ? res.status(200).end() : res.status(400).end()
    })
}


// Use username and password to authenticate user
export const signIn = (req: Request, res: Response) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(422).json({ errors: result.array() });
  }
  console.log(req.body);


  const { username, password } = req.body;
  let cognitoService = new Cognito();
  cognitoService.signInUser(username, password)
    .then(success => {
      success.result ? res.status(200).json(success.resdata) : res.status(400).end()
    })
}


// confirm signup account with code sent to email
export const verify = (req: Request, res: Response) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(422).json({ errors: result.array() });
  }
  const { username, code } = req.body;

  let cognitoService = new Cognito();
  cognitoService.confirmSignUp(username, code)
    .then(success => {
      success ? res.status(200).end() : res.status(400).end()
    })
}

export const confirmPassword = (req: Request, res: Response) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(422).json({ errors: result.array() });
  }
  const { username, password, code } = req.body;

  let cognitoService = new Cognito();
  cognitoService.confirmNewPassword(username, password, code)
    .then(success => {
      success ? res.status(200).end(): res.status(400).end()
    })
}

export const forgotPassword = (req: Request, res: Response) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(422).json({ errors: result.array() });
  }
  const { username } = req.body;

  let cognitoService = new Cognito();
  cognitoService.forgotPassword(username)
    .then(success => {
      success ? res.status(200).end(): res.status(400).end()
    });
}




