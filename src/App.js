import './App.css';
import allContacts from './contacts.json';
import { useState } from "react";

function App() {

  const firstFive = allContacts.slice(0, 5);
  const [celebs, setCelebs] = useState(firstFive);

  const addContact = () => {
    const random = allContacts[Math.floor(Math.random() * allContacts.length)];
    if (celebs.find((celebs) => celebs.id === random.id)) {
      if (celebs.length < allContacts.length) {
        addContact();
      }
      return;
    }
    setCelebs((celebs) => [random, ...celebs]);
  };

  const sortedByName = () => {
    const sortIt = [...celebs];
    sortIt.sort((a, b) => a.name.localeCompare(b.name));

    setCelebs(sortIt);
  };

  const sortedByPopularity = () => {
    const sortIt = [...celebs];
    sortIt.sort((a, b) => b.popularity - a.popularity);

    setCelebs(sortIt);
  };

  const deleteCeleb = (celebToFind) => {
    setCelebs((oldCelebs) => {
      return oldCelebs.filter((celebs) => celebs.id !== celebToFind.id);
    });
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div>
        <button onClick={addContact}>
          Add a random celebrity
        </button>
        <button onClick={sortedByName}>
          Sort by name
        </button>
        <button onClick={sortedByPopularity}>
          Sort by popularity
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {celebs.map((elem, index) => {
            return (
              <tr key={elem.name + index}>
                <td>
                  <img
                    src={elem.pictureUrl}
                    alt="celeb pic"
                    style={{ height: "100px" }}
                  />
                </td>
                <td>
                  <h3>{elem.name}</h3>
                </td>
                <td>
                  <h3>{(elem.popularity).toFixed(2)}</h3>
                </td>
                <td>
                  <h3>{elem.wonOscar ? <p>🏆</p> : <p>/</p>}</h3>
                </td>
                <td>
                  <h3>{elem.wonEmmy ? <p>🏆</p> : <p>/</p>}</h3>
                </td>
                <td>
                  <button onClick={() => deleteCeleb(elem)} > Delete </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div >
  );
}

export default App;
