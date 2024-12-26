import React from 'react';
import { Stack } from 'expo-router';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { STEPZEN_API_KEY, STEPZEN_URL } from '../utils/constants';

const client = new ApolloClient({
	uri: STEPZEN_URL,
	cache: new InMemoryCache(),
	headers: {
		Authorization: `apikey ${STEPZEN_API_KEY}`,
	},
});

const RootLayout = () => {
	return (
		<ApolloProvider client={client}>
			<Stack />
		</ApolloProvider>
	);
};

export default RootLayout;
