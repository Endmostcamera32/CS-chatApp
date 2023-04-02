import React from 'react';

const ChannelBox = ({ChannelName}) => (
    <div>
        <h1>{ChannelName}</h1>
        <button type='button'>Delete</button>
        <button type='button'>Change</button>
    </div>
);

export default ChannelBox;