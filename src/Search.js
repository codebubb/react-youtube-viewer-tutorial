import React, { useState } from 'react';

export const Search = props => {
    const [channelId, setChannelId] = useState('');
    return (
        <div>
            <div className="search">
                <input type="text" onChange={event => setChannelId(event.target.value)} placeholder="Enter your favourite channel ID" />
                <button disabled={!channelId.length} onClick={() => props.setCurrentChannelId(channelId)}>Get videos</button>
            </div>
        </div>
    );
}