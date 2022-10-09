import React from 'react';
import { useSelector } from 'react-redux';
import { Error, Loader, ArtistCard } from '../components'
import { useGetTopArtistsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {

    const { activeSong, isPlaying } = useSelector((state => state.player));
    const { data, isFetching, error } = useGetTopArtistsQuery();

    
    if (isFetching) return <Loader title="loading Top Artists" />
    if (error) return <Error />;
    return (
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Discover Top Artists </h2>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.map((track, i) => (
                    <ArtistCard
                        key={track.key}
                        track={track}
                    />
                ))}
            </div>
        </div>
    )
};

export default TopArtists;

