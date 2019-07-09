import { GraphQLClient } from 'graphql-request';
import { tagsQuery, userQuery} from './queries'

const start = async () => {
    await fetch(tagsQuery);
    await fetch(userQuery(2));
}

const fetch = async (query: string) => {
    const endpoint = 'http://localhost:3001/graphql';
    const graphQLClient = new GraphQLClient(endpoint, {
        headers: {},
    });

    const data = await graphQLClient.request(query);
    console.log(JSON.stringify(data, undefined, 2))
}

start().catch((error: string) => console.error(error));