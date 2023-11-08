import './css/App.css'
import UserCard from './components/UserCard'
import { useState } from 'react';

function App()
{
  const [user, setUser] = useState(0);

  class User
  {
    constructor(pfp, displayName, username, aboutMe, dateJoined, links)
    {
      this.pfp = pfp;
      this.displayName = displayName;
      this.username = username;
      this.aboutMe = aboutMe;
      this.dateJoined = dateJoined;
      this.links = links;
    }
  }

  class Link
  {
    constructor(siteName, url)
    {
      this.siteName = siteName;
      this.url = url;
    }
  }

  function toggleUser()
  {
      user === 0 ? setUser(1) : setUser(0);
  }

  const hicham = new User("https://cdn.discordapp.com/avatars/332582409877061633/6196132d118d46ff2412ec1e1b589c50.webp",
                          "Hicham", 
                          "itshichabk",
                          "Computer science student who loves tech, especially operating systems!",
                          "2017-07-06",
                          [new Link("GitHub", "https://github.com/itshichabk"), new Link("Twitter", "https://twitter.com/itshichabk")]
                          );

  const antoine = new User("https://cdn.discordapp.com/avatars/685996256434454579/973ff24d494e78b12be93a6cfd46dd55.webp",
                           "Antoine",
                           "archidoc",
                           "https://github.com/Archidoc142",
                           "2020-03-07",
                           [new Link("GitHub", "https://github.com/Archidoc142")]
                           );

  const users = [hicham, antoine];

  return (
    <>
      <UserCard user={users[user]}/>
      <button onClick={toggleUser} className="toggleBtn">Toggle user</button>
    </>
  )

}

export default App
