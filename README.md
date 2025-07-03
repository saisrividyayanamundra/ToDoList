# 🗒️ React ToDoList App

A lightweight, interactive **To‑Do List** built with React Hooks — featuring **add**, **edit**, and **delete** functionality, styled with responsive CSS.

---


## Description

This project showcases a simple To‑Do List component that lets users add tasks, edit them inline, and remove items they no longer need. The clean structure and CSS organization make it easy to extend and style.

---

## Features

- ➕ **Add** new tasks  
- ✏️ **Edit** existing tasks  
- 🗑️ **Delete** tasks  
- 🎨 Structured styling with CSS classes  
- 📱 Mobile-friendly layout using Flexbox

---

## Technologies Used

- **React** (with Hooks: `useState`)  
- Modern **JavaScript**  
- **HTML5 & CSS3**  
- **Flexbox** for layout  

---

## Getting Started

### Prerequisites

- Node.js & npm installed  
- An existing React project setup (e.g. with Create React App or Vite)

### Installation

1. Clone or download this repository  
2. Copy `ToDoList.jsx` (or `.js`) and `App.css` into your project  
3. Ensure CSS is imported (global or component-specific)  
4. In your root component:
    ```jsx
    import ToDoList from './ToDoList';
    import './App.css';

    function App() {
      return (
        <div className="App">
          <ToDoList />
        </div>
      );
    }

    export default App;
    ```
5. Run `npm install` if needed, then `npm start` to launch in development mode

---

## App Overview

**State hooks used:**

| Hook         | Purpose                                                  |
|--------------|-----------------------------------------------------------|
| `inputValue` | Tracks current input field for new task                 |
| `items`      | Array of added to‑do items                              |
| `editIndex`  | Stores index of the task being edited (`null` if none)  |
| `editValue`  | Holds edited value before saving                        |

**Main Functions:**

- `handleChange` – updates `inputValue`  
- `handleAddClick` – adds a non-empty task  
- `handleDelete` – removes a task  
- `handleEdit` – enables edit mode for selected task  
- `handleSave` – saves edits and exits edit mode

---

## Styling & Layout

**Key CSS classes:**

- `.todo-list` – container for inputs and list  
- `.no-bullets-list` – removes default list bullets  
- `.todo-items` – flex container aligning task text and buttons  
- `.list-items`, `.add-button`, `.edit-button`, `.delete-button`, `.save-btn` – styled as per visual hierarchy  







