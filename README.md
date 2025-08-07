# Next.js & Prisma Postgres starter

This repository provides a boilerplate to quickly set up a Next.js demo application with [Prisma Postgres](https://www.prisma.io/postgres) and [Prisma ORM](https://www.prisma.io/orm), and deploy it to Netlify. It includes an easy setup process and example routes that demonstrate basic CRUD operations against the database.

For the deployment on Netlify, you can use the [Prisma Postgres extension](https://www.netlify.com/integrations/prisma) for Netlify.

![](./nextjs-ppg-template.png)

## Development
Inicia la aplicacion
```
npm run dev
```

## Features

- Next.js 15 app with App Router, Server Actions & API Routes
- Data modeling, database migrations, seeding & querying
- CRUD operations to create, view and delete blog posts
- Pagination, filtering & relations queries

If you want to go further, check out our [Next.js app with Authentication](https://github.com/prisma/nextjs-prisma-postgres-demo) example.

## Getting started

Follow the steps in [USAGE.md](./USAGE.md) to set up this starter template, connect it with Prisma Postgres and deploy to Netlify.

## Next steps

- [Prisma ORM documentation](https://www.prisma.io/docs/orm)
- [Prisma Client API reference](https://www.prisma.io/docs/orm/prisma-client)
- [Join our Discord community](https://discord.com/invite/prisma)
- [Follow us on Twitter](https://twitter.com/prisma)

## Migrations
1. Cambia el archivo schema.prisma con las nuevas tablas de bases de datos o cambios en la estructura actual

2. Ejecuta el siguiente comando para generar las sentencias SQL que lograran migrar la base de datos al estado deseado
```sh
npx prisma migrate dev --name "descripcion_cambios_aplicados"
```

3. Esto ocasionara que se genere un nuevo archivo:
```sh
prisma/migrations/<descripcion_cambios_aplicados>/migration.sql
```

4. Puedes modificar el SQL en caso de ser necesario y luego alteras la base de datos con el siguiente comando:
```sh
npx prisma migrate dev
```

¿Puedo usar migraciones en producción?
Si, Aplica migraciones pendientes sin generar nuevas:

```bash
npx prisma migrate deploy
```


¿Y si necesito resetear la DB?
Borra la DB, aplica migraciones desde cero y corre los seeders

```bash
npx prisma migrate reset
```

## Seeders
Llena la bdd con info ejecutando el comando
```bash
npx prisma db seed
```