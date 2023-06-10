import { CiSearch } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import NoteItem from "../components/NoteItem";
import { useEffect, useState } from "react";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };

  useEffect(handleSearch, [text]);
  return (
    <section>
      <header className="notes__header">
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && (
          <input
            type="text"
            value={text}
            autoFocus
            placeholder="Keyword..."
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
          />
        )}
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            className="btn"
            onClick={() => setShowSearch((prevState) => !prevState)}
          >
            {showSearch ? <MdClose /> : <CiSearch />}
          </button>
          <Link to="/create-note" className="btn">
            <BsPlusLg />
          </Link>
        </div>
      </header>
      <div className="notes__container">
        {filteredNotes.length === 0 && (
          <p className="empty__notes">No notes found!</p>
        )}
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
    </section>
  );
};

export default Notes;
