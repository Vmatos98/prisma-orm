import {prisma} from "../config/database.js";
import {CreateQuestionData} from "../services/questionService.js";

async function postQuestion( question: CreateQuestionData){
    return await prisma.question.create({data: question});
}

async function getQuestions(){
    return await prisma.question.findMany();
}

export {postQuestion, getQuestions};