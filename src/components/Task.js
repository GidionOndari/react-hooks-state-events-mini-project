function Task({ text, category, onDelete }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Task;
