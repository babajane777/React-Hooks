import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);

    if (!jsonValue) return defaultValue;

    return JSON.parse(jsonValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;







// Certainly! Let's go through the code and understand how the useLocalStorage custom hook works.
// jsx
// Copy code
// import { useState, useEffect } from "react";
// const useLocalStorage = (key, defaultValue) => {
//   const [value, setValue] = useState(() => {
//     const jsonValue = localStorage.getItem(key);
//     if (!jsonValue) return defaultValue;
//     return JSON.parse(jsonValue);
//   });
//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);
//   return [value, setValue];
// };
// export default useLocalStorage;
// The useLocalStorage hook is a custom hook that helps in managing values stored in the browser's local storage. It takes two parameters: key and defaultValue. The key is a unique identifier for the stored value, and the defaultValue is used when there is no existing value in local storage for the provided key.
// Inside the hook, the useState hook is used to manage the value state. The initial state is set using a function passed to useState that checks if there is an existing value in local storage for the given key. If there is no value, it returns the defaultValue. Otherwise, it parses the stored JSON value and returns it.
// The useEffect hook is used to synchronize the value with local storage whenever it changes. It listens for changes in the key or value dependencies. When either of them changes, it updates the corresponding value in local storage by calling localStorage.setItem(key, JSON.stringify(value)).
// Finally, the hook returns an array [value, setValue]. This allows components using the useLocalStorage hook to access the stored value (value) and update it (setValue) just like the regular useState hook.
// In the App component, the useLocalStorage hook is imported and used to manage the name and age values. The values are retrieved from local storage and updated whenever they change using the setName and setAge functions returned by the hook. The stored values are then displayed in the component's JSX.
// By using the useLocalStorage hook, the values of name and age will be stored in local storage and persisted across page reloads.
