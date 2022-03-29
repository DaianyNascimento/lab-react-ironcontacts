import './App.css';
import AllContacts from './contacts.json';
//import { celebs } from "react";
const celebs = AllContacts.splice(0, 6);

function App() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
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
              <tr>
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
                  <h3>{elem.wonOscar ? "trophy" : "no trophy"}</h3>
                </td>
                <td>
                  <h3>{elem.wonEmmy ? "emmy" : "no emmy"}</h3>
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
