import express from 'express';
import sha256 from 'sha256';
import { User } from '../database/models';

const userController = express.Router();

userController.get('/', (req, res) => {
  User.find({}, (err, result) => {
    res.status(200).json({
      data: result,
    });
  });
});

userController.post('/add-user', (req, res) => {
  const { email, password } = req.body;

  const userData = {
    email,
    hashedPassword: sha256(password),
  };
  const newUser = new User(userData);
  newUser
    .save()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send('unable to save to database');
    });
});

userController.get('/update/:id', (req, res) => {
  User.findById(req.params.id)
    .then(data => res.status(200).send(data))
});

userController.put('/update/:id', (req, res) => {
  const { email, password } = req.body;
  User.findByIdAndUpdate(req.params.id, { email, password: sha256(password) })
    .then(data => res.status(200).send(data))
});

userController.delete('/delete-user/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => {
      res.send('User delete')
    })
    .catch(err => res.status(400).json("Error: " + err))
});

export default userController;
