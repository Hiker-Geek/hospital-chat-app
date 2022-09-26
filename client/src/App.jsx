import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import { Cookies } from 'universal-cookie';

import { ChannelContainer, ChannelListContainer, Auth } from './Components';
import './App.css';

const authToken = false;

const apikey = '2tepc2m8nkat';

const client = StreamChat.getInstance(apikey);

const App = () => {
    if(!authToken){ return <Auth/>}
    else{ return (
        <div className='app__wrapper'>
            <Chat client = {client} theme="team light">
                <ChannelListContainer/>
                <ChannelContainer/>
            </Chat>
        </div>
    )}
}

export default App