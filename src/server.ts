
import 'reflect-metadata';
import './utils/connections';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server'
import { CategoryResolve } from './graphql/CategoryResolve';
import VideoResolver  from './graphql/videos/VideoResolver';

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [ CategoryResolve, VideoResolver ],
    });
    
    const server = new ApolloServer({ schema });

    server.listen({ port: 4100 }, () => console.log('Running'))
}

bootstrap();