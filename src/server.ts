import { buildSchema } from 'graphql';
import { Schema } from 'mongoose';
import 'reflect-metadata';
import './utils/connections';
import { ApolloServer } from 'apollo-server'

async function bootstrap() {

    const schema = await buildSchema({
        resolvers: [],
    });
    const server = new ApolloServer({ schema });

    server.listen({ port: 4100 }, () => console.log('Running'))
}

bootstrap();