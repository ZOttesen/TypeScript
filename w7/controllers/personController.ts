import { Request, Response } from 'express'
import logger from '../utility/logger';
import PersonModel from '../models/personModel';
import {Person} from '../types/Person';

const getAllPeople = async (req: Request, res: Response) => {
  try {

    const queryObj = req.query;
    console.log(queryObj);
    const person: Person[] = await PersonModel.find(queryObj);
    res.status(200).json({
      status: 'success',
      data: person,
    })
    logger.info("All person fetched")
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
    logger.info("Could not fetch persons")
  }
}

const getPersonById = async (req: Request, res: Response) => {
  try {
    const person: Person | null = await PersonModel.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: person
    })
    logger.info("Person fetched")
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
    logger.info("Could not fetch person")
  }
}

const createPerson = async (req: Request, res: Response) => {
  try {
    const newPerson: Person = await PersonModel.create(req.body);
    res.status(201).json({
      status: 'success',
      data: newPerson
    })
    logger.info("Person created")
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    })
    logger.info("Could not create person")
  }
}

const updatePerson = async (req: Request, res: Response) => {
  let person: Person | null = await PersonModel.findById(req.params.id);
    try{
      if (person) {
        person.name = req.body.name;
        person.age = req.body.age;
        person.city = req.body.city;
      }
        res.status(200).json({
            status: 'success',
            data: person
        })
    }catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

const deletePerson = async (req: Request, res: Response) => {
    try{
      await PersonModel.findByIdAndDelete(req.params.id);
      res.status(200).json({
          status: 'success',
          data: null
      })
    }catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}



const PersonController = {
  getAllPeople,
  getPersonById,
  createPerson,
  updatePerson,
  deletePerson
}
export default PersonController;