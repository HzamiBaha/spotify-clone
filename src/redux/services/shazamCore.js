import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '40173bcd2amshe8c860d81638fa2p17cdddjsn9cc5542c86f2')
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query:() => '/charts/world' }),
    }),

});
export const {
    useGetTopChartsQuery,
} = shazamCoreApi;