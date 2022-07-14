import * as repository from '../repositories/questionRepository.js';

import {Question} from "@prisma/client";

export type CreateQuestionData = Omit<Question,"id"|"createdAt">;

async function postQuestion(question: CreateQuestionData) {
    console.log(question);
    return await repository.postQuestion(question);
}
async function getQuestions() {
    return await repository.getQuestions();
}

const questionService = {postQuestion, getQuestions};
export default questionService;