import React from 'react'
import Login from  './Login';
import Card from './card';
import Data from './Data';

const UserContext = React.createContext();

export default UserContext;

<UserContext>
<Login/>
<Card>
    <Data/>
</Card>
</UserContext>