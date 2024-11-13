import Bellow from "./Bellow";

function App() {
  const debates = [
    {
      title: "Rohit Sharma",
      description: "INDIA Wins",
    },
    {
      title: "Luffy vs Kaido",
      description: "Bajrangg Gunn",
    },
    {
      title: "React vs Angular",
      description: "React is better",
    },
    {
      title: "MERN vs MEAN",
      description: "MERN is better",
    },
    {
      title: "Eknath Shinde vs Uddhav Thackeray",
      description: "Ekanath Shinde Wons",
    },
  ];

  return (
    debates && (
      <div className="flex justify-center items-center h-screen">
        <Bellow data={debates} filterKeyword="" isOpen />
      </div>
    )
  );
}

export default App;