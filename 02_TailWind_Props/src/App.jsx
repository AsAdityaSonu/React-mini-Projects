import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    username:"Aditya",
    age:20
  }

  let newArray = [1,2,34,45,65]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">hi</h1>

      <Card channel="Aditya" someObj = {myObj} arr = {newArray} />
    </>
  );
}

export default App;
