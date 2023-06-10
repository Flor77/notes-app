import React from "react";
import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const backgroundColor = getRandomColor();
  return (
    <div className="note-item" style={{ backgroundColor: backgroundColor }}>
      <Link to={`/edit-note/${note.id}`} className="note">
        <h4 className="note-title">
          {note.title.length > 40
            ? note.title.substr(0, 40) + "..."
            : note.title}
        </h4>
        <p>{note.date}</p>
      </Link>
    </div>
  );
};

export default NoteItem;
