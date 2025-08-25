

````
# Browser History Management System

A React-based web application to manage and search browsing history with features like real-time search filtering,
persistent storage, dark mode toggle, item deletion, and reset functionality.

---

## Features

- Search Filtering – Quickly search through history by title.  
- Delete History Items – Remove any specific entry from the history list.  
- Dark/Light Mode Toggle – Switch between dark and light themes.  
- Reset History – Restore the original history list with one click.  
- Persistent Storage – History and theme are saved in `localStorage` so data is not lost after page reload.  
- Empty State Handling – Displays a friendly message when no history is available.  

---

## Tech Stack

- React.js (Component-based UI)  
- JavaScript (ES6+)  
- HTML5 & CSS3  
- Local Storage API for persistence  

---

## Project Structure

src/
│── components/
│   └── BrowserHistory.js   # Main BrowserHistory component
│── App.js                  # Root component
│── App.css                 # Global styles
│── index.js                # ReactDOM entry point
│── index.css               # Base styles
````

---

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Mehul0623/browser-history-react-app.git
   cd browser-history-react-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app in development mode:

   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000).

---


