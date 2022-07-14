import { CreateAnswerData } from "../services/answerService.js";
import {prisma} from "../config/database.js";

export async function postAnswer(post: CreateAnswerData) {
    console.log(post);
    return await prisma.answer.create({data: post});
} 

export async function getAnswers(id: number) {
    return await prisma.question.findMany({ 
        where: { id },
        include: { answers: {
            select: {
                answer: true,
            }
        } } 
    });
}
    
