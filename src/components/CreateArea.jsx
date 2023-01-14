import React, { useState } from "react";

function CreateArea(props) {
  const [input, setInput] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.onClick(input);
    setInput({
      title: "",
      content: ""
    });
  }

  const [isExpanded, setExpanded] = (useState(false));
  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form>
      {isExpanded? <input
          onChange={handleChange}
          value={input.title}
          name="title"
          placeholder="Title"
        />: null}        
        <textarea
          onChange={handleChange}
          value={input.content}
          name="content"
          placeholder="Take a note..."
          rows= {isExpanded? 3: 1}
          onClick={expand}
        />
        <button
          onClick={submitNote}

          //   () => {
          //   props.onClick(input);
          //   setInput("");
          // }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
