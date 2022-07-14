import { Request, Response } from "express";
import answerService from "../services/answerService.js";
import questionService  from "../services/questionService.js";

export async function create(req: Request, res: Response) {
    await questionService.postQuestion(req.body);
    res.sendStatus(201);
    
}

export async function answer(req: Request, res: Response) {
  const id = +req.params.id;

  await answerService.postAnswer({...req.body, questionId: id});
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const result = await questionService.getQuestions();
  res.status(200).send(result);
}

export async function getById(req: Request, res: Response) {
  const id = +req.params.id;
  const result = await answerService.getAnswers(id);
  res.status(200).send(result);
}
