import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

export const createApolloClient = (uri) => {
    const httpLink = createHttpLink({
        uri: uri,
    });
    
    const authLink = setContext((_, {headers}) => {
        return {
            headers: {
                ...headers,
            },
        };
    });

    const apolloClient = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });

    return apolloClient;
}