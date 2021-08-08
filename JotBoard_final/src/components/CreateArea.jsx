import React, { useEffect, useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
 const [effect,setEffect]=useState(false)
 function clickHandle(){
  setEffect(true)
 }
  function handleChange(event) {
    
    const { name, value } = event.target;
    
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {effect && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
        onClick={clickHandle}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={effect?3:1}
        />
        <Zoom in={effect}>
        <Fab  onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
