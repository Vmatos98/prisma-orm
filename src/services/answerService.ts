import {Answer} from "@prisma/client";
import * as repositories from "../repositories/answerRepository.js";

export type  CreateAnswerData = Omit<Answer,"id"|"createdAt">;

async function postAnswer(post: CreateAnswerData) {
    await repositories.postAnswer(post);
}

async function getAnswers(id: number) {
    return await repositories.getAnswers(id);
}

const answerService = {postAnswer, getAnswers};
export default answerService;