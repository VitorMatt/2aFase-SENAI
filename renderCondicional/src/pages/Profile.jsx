import {useState } from 'react';
import UserLogado from '../components/UserLogado';
import Login2 from '../components/Login2';

function Profile() {

  const [user, setUser] = useState(false);

  return (
    <div>
        <h1>Profile</h1>
        <h2>
          {
            user
            ?
            <UserLogado />
            :
            <Login2 />
          }
          </h2>
    </div>
  );
};

export default Profile;