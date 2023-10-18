import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const locationData: any = [
    {
        name: 'Coliseo del pueblo',
    },
    {
        name: 'Estadio el campin',
    },
    {
        name: 'Universidad del Valle'
    },
]

async function main() {
    console.log(`Start seeding ...`)
    for (const loc of locationData) {
        const location = await prisma.location.create({
            data: loc,
        })
        console.log(`Created location with id: ${location.id}`)
    }
    console.log(`Seeding finished.`)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })