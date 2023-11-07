import './css/App.css'
import UserCard from './components/UserCard'

function App()
{

  // let user = {
  //   // displayName, username, aboutMe, dateJoined, links
  //   //di

  // };
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

  return (
    <>
      <UserCard user={hicham} />
      <UserCard user={antoine} />
    </>
  )

}

export default App
