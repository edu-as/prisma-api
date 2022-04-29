import { prisma } from "@prisma/client";

export class CreateUserUseCase {
    async execute ({ name, email}: CreateUSerDTO): Promise<User> {
        // Verificar se o usuário já existe
         const userAlreadyExists = await prisma.user.findUnique({
            where: {
                 email
            }
        });
        if (userAlreadyExists) {
            // erro
        }
        // Criar o usuário
        const user = await prisma.user.create({
            data: {
                name,
                email
            }
        });
        return user;
    }
}