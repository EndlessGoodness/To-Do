# To-Do Web App

A modern, minimal, and interactive To-Do list web application built with vanilla JavaScript, HTML, and CSS.  
This project features project-based task organization, priority filtering, and a beautiful, responsive UI.

---

## Features

- **Add, check, and delete tasks**
- **Organize tasks by project**
- **Filter tasks by project or show all**
- **Set task priority (1–3)**
- **Mark tasks as done (with strikethrough)**
- **Beautiful, responsive, and accessible design**
- **Data persists in your browser (localStorage)**

---


## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/todo-web-app.git
cd todo-web-app
```

### 2. Open the app

You can open `src/template.html` directly in your browser for local testing.

**Or** use a simple static server (recommended for fetch/localStorage to work):

```bash
# Using Python 3
cd src
python -m http.server 8000
```
Then visit [http://localhost:8000/template.html](http://localhost:8000/template.html)

---


## Project Structure

```
src/
│
├── add-new.js      # Handles adding new todos
├── data.js         # Shared library object and localStorage helpers
├── index.js        # Entry point
├── library.json    # Default todos (used on first load)
├── list.js         # Renders and manages the todo list
├── main.js         # Board creation
├── storage.js      # localStorage utility functions
├── styles.css      # All styles
├── template.html   # Main HTML template
└── website.js      # App initialization and navigation
```

---

## Usage

- **Add a task:** Click the "+" button, fill out the form, and submit.
- **Mark as done:** Check the box next to a task to mark it as completed.
- **Delete a task:** Click the "Delete" button on a task card.
- **Filter by project:** Use the left sidebar to filter tasks by project or show all.

---

## Notes

- **Data is persistent:** All tasks are stored in your browser's localStorage.  
  On first load, the app uses `library.json` as a template.
- **No backend required:** This is a frontend-only project for learning and demonstration purposes.

---

## Screenshots

(![image](https://github.com/user-attachments/assets/b5feee78-e409-432e-9bc1-29d253b010ae)
)

---

## License

MIT License

---

## Credits

Made by Surya Singh (https://github.com/EndlessGoodness)

