import React, { useState } from "react";

function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    var value = event.target.value;
    var name = event.target.name;
    setnote((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  return (
    <div>
      <form>
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            props.functiontobesenttoapp(note);
            setnote({
              title: "",
              content: ""
            });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
