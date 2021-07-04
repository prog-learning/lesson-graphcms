import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const uri = process.env.NEXT_PUBLIC_GRAPHCMS_CONTENT_API;
const cache = new InMemoryCache();

const client = new ApolloClient({ uri, cache });

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
