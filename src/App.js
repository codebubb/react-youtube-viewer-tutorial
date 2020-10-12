import React, { useState, useEffect } from 'react';
import { Search } from './Search';
import { Video } from './Video';

export function App() {
    const [videos, setVideos] = useState([]);
    const [currentChannelId, setCurrentChannelId] = useState();
    const [channelName, setChannelName] = useState();
    const [searchError, setSearchError] = useState();

    const baseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D';

    useEffect(() => {
        (async () => {
            if (currentChannelId) {
                try {
                    const data = await fetch(`${baseUrl}${currentChannelId}`).then(response => response.json());
                    if (!data.items) {
                        throw new Error();
                    }

                    setVideos(data.items);
                    setChannelName(data.items[0].author);
                    setSearchError('');

                } catch (error) {
                    console.log(error);
                    setSearchError(`Couldn't retrieve videos, check your channel ID.`);
                }
            }
        })();
    }, [currentChannelId]);

    return (
        <div className="app-container">
            <h1>Latest YouTube Videos</h1>
            <Search setCurrentChannelId={id => setCurrentChannelId(id)}/>
            <div className="search__errors">
                {searchError}
            </div>
            {channelName && <h2>Videos from {channelName}</h2>}
            <div className="videos">
                {videos.map(video => <Video key={video.guid} video={video} />)}
            </div>
        </div>
    );
};
