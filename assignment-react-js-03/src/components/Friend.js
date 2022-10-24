import React,{useState} from 'react'
import FriendList from './FriendList';

function Friend() {
    const [users, setUsers] = useState(['Frank', 'Matthew', 'Carol', 'Wilson', 'Barbara']);
    const [search, setSearch] = useState("");
    const [addFriend, setAddFriend] = useState("");

    const filtered = (users.filter((user) => user.toLowerCase().includes(search.toLowerCase())));

    const handleClick = (key) => {
      setAddFriend(users[key]);
      users.splice(key, 1);
    }

    return (
      <div>
            <h1>Search Friend</h1>
            <input name='filter' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)}/>
            {filtered.map((user, key) => (
              <div key={key}>
                {user} <button onClick={() => (handleClick(key))}>Add Friend</button>
              </div>
            ))}
            <hr />
            <FriendList addingFriend={addFriend}/>
      </div>
    )
}

export default Friend;