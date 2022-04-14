import express, { response } from "express";
import { PrismaLessonsRepository } from "./repositories/prisma/PrismaLessonsRepository";
import { CreateLesson } from "./services/CreateLesson";

export const app = express();

app.use(express.json());

app.post('/lessons', async (req, resp) => {
    const { title, description } = req.body;

    const prismaLessonsRepository = new PrismaLessonsRepository();
    const createLesson = new CreateLesson(prismaLessonsRepository);

    try {
        await createLesson.execute({ title, description });

        return response.status(201).send();
    } catch (e: any) {
        return response.status(400).json({
            error: e.message
        });
    }
})