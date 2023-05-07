import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notearray, setnotearray] = useState([]);
  function notefunction(note) {
    console.log(note);
    setnotearray((prev) => {
      return [...prev, note];
    });
  }

  function deletefunction(id) {
    setnotearray((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea functiontobesenttoapp={notefunction} />
      {notearray.map((item, index) => {
        console.log(notearray);
        return (
          <Note
            key={index}
            title={item.title}
            content={item.content}
            del={deletefunction}
            id={index}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
