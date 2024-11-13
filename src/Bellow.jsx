import Accordion from "./Accordion";

function Bellow({ data = [] }) {
  return (
    <div className="border-2 border-zinc-600 rounded-lg">
      {data.map((d) => (
        <Accordion
          key={crypto.randomUUID()}
          title={d.title}
          description={d.description}
        />
      ))}
    </div>
  );
}

export default Bellow;