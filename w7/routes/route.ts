import express = require("express");
import PersonController from '../controllers/personController';

const personRouter = express.Router();

personRouter.route('/').get(PersonController.getAllPeople).post(PersonController.createPerson);
personRouter.route('/:id').get(PersonController.getPersonById).put(PersonController.updatePerson).delete(PersonController.deletePerson).delete(PersonController.deletePerson);


export default personRouter;