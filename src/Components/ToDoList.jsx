import { useState } from "react";

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleChange = (e) => setInputValue(e.target.value);

  const handleAddClick = () => {
    const val = inputValue.trim();
    if (val) {
      setItems([...items, val]);
      setInputValue("");
    }
  };

  const handleDelete = (item) =>
    setItems(items.filter((i) => i !== item));

  const handleEdit = (idx, value) => {
    setEditIndex(idx);
    setEditValue(value);
  };

  const handleSave = (idx) => {
    if (editValue.trim()) {
      setItems(items.map((i, j) => (j === idx ? editValue : i)));
      setEditIndex(null);
      setEditValue("");
    }
  };

  return (
    <div>
      <h1>TODO LIST</h1>

      <div className="todo-list">
      <input
        placeholder="Add items"
        value={inputValue}
        onChange={handleChange}
      />
      <button className="add-button" onClick={handleAddClick}>Add</button>
      <ul className="no-bullets-list">
        {items.map((item, idx) => (
          <li key={idx}>
            {editIndex === idx ? (
              <>
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button className="save-btn" onClick={() => handleSave(idx)}>Save</button>
              </>
            ) : (
              <>
              <div className="todo-items">
                <div className="list-items">
                  {item}
                </div>

                <button className="delete-button" onClick={() => handleDelete(item)}>
                  Delete
                </button>
                <button className="edit-button" onClick={() => handleEdit(idx, item)}>
                  Edit
                </button>
              </div>
               
                
              </>
            )}
          </li>
        ))}
      </ul>
      </div>
     
    </div>
  );
}

export default ToDoList;
