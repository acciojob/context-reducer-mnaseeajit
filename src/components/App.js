import React, { useState } from "react"; // Import useState
import { useAuth } from "./Auth"; // Import useAuth hook
import { AuthProvider } from "./Auth";

const App = () => {
    const { isAuthenticate, currentUser, login, signout } = useAuth(); // Use useAuth hook
    const [inputValue, setInputValue] = useState("");
    const [items, setItems] = useState([]);

    const handleAddItem = () => {
        // Implement handleAddItem
        if(inputValue.trim() != ""){
            setItems([...items,inputValue]);
            setInputValue("");
        }
    };

    const handleClearList = () => {
        // Implement handleClearList
         setItems([]);
    };

    const handleRemoveItem = () => {
        // Implement handleRemoveItem
        setItems(items.filter(i => i != items));
    };


    

    return (
        <div>
            <button id="login-btn" onClick={() => login('rohan')}>Login</button>
            <button id="signout" onClick={signout}>Signout</button>
            <div id="current-user">
                CurrentUser : {currentUser ? currentUser : ""} , isAuthenticate : {isAuthenticate ? "yes" : "no"}
            </div>
            <input id="shopping-input" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleAddItem}>Add</button>
            <ul>
                {items.map((item, index) => (
                    <li key={`item-${index}`}>
                        {item}
                        <button id={`remove-${item}`} onClick={handleRemoveItem}>Remove</button>
                    </li>
                ))}
            </ul>
            <button id="clear-list" onClick={handleClearList}>Clear List</button>
        </div>
    );
};




const AppWithAuthProvider = () => ( // Wrap App component with AuthProvider
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default AppWithAuthProvider;