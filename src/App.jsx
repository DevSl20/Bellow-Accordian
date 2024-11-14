import Bellow from "./Bellow";
import item from "./assets/item.json";

function App() {
  return (
      <div className="flex justify-center items-center min-h-screen my-10">
        <Bellow 
        data={item} 
        filterKeyword=""
        isOpen={true}
        showWordCount={true}
        onClick={(value) => console.log(value)}
        />
      </div>
  );
}

export default App;