import { useState } from "react";
import Bellow from "./Bellow";
import item from "./assets/item.json";

function App() {
  const [lastclicked, setLastclicked] = useState("None");
  return (
      <div className="flex justify-center items-center min-h-screen my-10">
        <h1>Last Clicked={lastclicked}</h1>
        <Bellow 
        data={item} 
        filterKeyword=""
        isOpen={true}
        showWordCount={true}
        setLastClicked={setLastclicked}
        // onClick={(value) => console.log(value)}
        />
      </div>
  );
}

export default App;