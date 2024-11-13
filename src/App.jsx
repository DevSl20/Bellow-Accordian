import Bellow from "./Bellow";

function App() {
  const debates = [
    {
      title: "Marvels",
      description: "Marvels are awesome",
    },
    {
      title: "Coke vs Pepsi",
      description: "Coke is better",
    },
    {
      title: "React vs Angular",
      description: "React is better",
    },
    {
      title: "Java vs Kotlin",
      description: "Kotlin is better",
    },
    {
      title: "Coke vs Pepsi",
      description: "Kotlin is better. This is changed!",
    },
  ];

  return (
    debates && (
      <div className="flex justify-center items-center h-screen">
        <Bellow data={debates} />
      </div>
    )
  );
}

export default App;