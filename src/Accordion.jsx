import React,{useState,useEffect} from 'react';

function Accordion({
  title = "Title",
  description = "Description",
  isOpen = false,
  underline = true,
  showWordCount = true,
  onClick = () => {},
}) {
  const [count, setCount] = useState(0);
  const [click , setClick] = useState(false); //for re-rendering
  useEffect(() => {

  fetch("https://18-11-2024-wakati.devangsalvi21.workers.dev/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: description,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      setCount(data.wordsCount);
      console.log(data.wordsCount);
    });
  });
  return (
    <details className="w-80 bg-stone-100 m-1 p-2 rounded" open={isOpen} onClick={() => onClick(title)}>
      <summary className={`cursor-pointer font-bold text-stone-900`}>
        <span className={`${underline && 'hover:underline'}`}>{title}</span>
        <span className="font-normal text-zinc-600 text-sm ml-3">
          {showWordCount && `${description.split(' ').length} words`}
        </span>
      </summary>
      <p className="text-stone-800">{description}</p>
    </details>
  );
}



export default Accordion;