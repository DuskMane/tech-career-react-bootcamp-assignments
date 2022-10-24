import React, {useState, useEffect} from 'react'

function FriendList({addingFriend}) {
    const [search, setSearch] = useState("");
    const [friendList, setFriendList] = useState([]);

    const filtered = friendList.filter((friend) => friend.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
      setFriendList([...friendList, addingFriend]);
    }, [addingFriend])

    const handleRemoveFriend = (key) => {
      friendList.splice(key , 1);
      setFriendList([...friendList]);
    }

  return (
    <div>
        <h1>Friend List</h1>
        <div>
            <input name='filter' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)}/>
            {filtered.map((friend, key) => (
              <div key={key}>
                {friend} <button onClick={() => handleRemoveFriend(key)}>Remove Friend</button>
              </div>
            ))}
      </div>
    </div>
  )
}

export default FriendList