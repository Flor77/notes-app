import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import useCreateDate from "../components/useCreateDate";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const date = useCreateDate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const note = {
      id: uuid(),
      title,
      details,
      date,
    };
  };
  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleSubmit}>
          Save
        </button>
      </header>
      <form className="create-note__form" onSubmit={handleSubmit}>
        <input
          value={title}
          type="text"
          placeholder="Title"
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={details}
          rows="28"
          placeholder="Note details..."
          onChange={(e) => setDetails(e.target.value)}
        />
      </form>
    </section>
  );
};

export default CreateNote;
