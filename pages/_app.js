import '../styles/globals.css';
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const GRAPHCMS_API = process.env.NEXT_PUBLIC_GRAPHCMS_CONTENT_API;

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache(),
});
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}

export default MyApp;
