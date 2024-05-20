import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        user_name: "Alice",
        e_mail: "alice@example.com",
        age: "25",
        student: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_name: "Bob",
        e_mail: "bob@example.com",
        age: "30",
        student: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_name: "Charlie",
        e_mail: "charlie@example.com",
        age: "28",
        student: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
  });

  console.log("Test data has been inserted");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
