import React, { useState } from "react";

const List = () => {
  const [list, setList] = useState([
    {
      id: 1,
      text: "run",
    },
    {
      id: 2,
      text: "walk",
    },
    {
      id: 3,
      text: "move",
    },
  ]);
  return (
    <>
      {list.map((temp) => (
        <>{temp.text}</>
      ))}
    </>
  );
};

export default List;
