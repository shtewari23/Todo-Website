import React, { useState, useEffect } from 'react'; // Import React, useState, and useEffect
import { connect } from 'react-redux';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import backgroundImage from './images/backgroundImage.jpg'; // Import your background image file
import { Rotate90DegreesCcw, X } from '@mui/icons-material';
import darkBackgroundImage from './images/darkBackground.jpg';
import giph2 from './images/giph2.gif';
import './App.css';
const App = React.memo(({ todos }) => {
  const [showNoTasksImage, setShowNoTasksImage] = useState(true);
  const [checked, setChecked] = React.useState(true);
  const [fullDate, setFullDate] = useState('');
  const [darkMode, setDarkMode] = useState(false); // State variable for dark mode

  const handleAddTask = () => {
    setShowNoTasksImage(false);
  };

  useEffect(() => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    setFullDate(`${date}/${month}/${year}`);
  }, []);

  const toggleTheme = (event) => {
    setDarkMode(!darkMode); // Toggle dark mode
    setChecked(event.target.checked);
  };

  

  const styles = {
    appContainer: {
      backgroundImage: `url(${darkMode ? darkBackgroundImage : backgroundImage})`, // Change background image based on dark mode      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundColor: darkMode ? '#212121' : 'transparent', // Adjust background color for dark mode
      color: darkMode ? '#fff' : '#000', // Adjust font color for dark mode
    },
    toggleButton: {
      position: 'fixed',
      top: '20px',
      right: '20px',
      backgroundColor: darkMode ? '#fff' : '#000', // Adjust button color for dark mode
      color: darkMode ? '#000' : '#fff', // Adjust button text color for dark mode
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: '999',
    },
  };

  return (
    <div style={styles.appContainer}>
      <button style={styles.toggleButton} onClick={toggleTheme}>
        {darkMode ? <Rotate90DegreesCcw /> : <X />}
      </button>
  
      <div className='dateContainer'>
        <h1 style={{ fontSize: '38px', fontFamily: 'sans-serif', color: darkMode ? '#fff' : 'grey' }}>Today -</h1>
        <span style={{ fontSize: '26px', fontFamily: 'sans-serif', color: darkMode ? 'lightgrey' : 'lightslategray', marginTop: '27px', padding: '10px' }}>{fullDate}</span>
      </div>
      <div className={darkMode ? 'todo-container-dark':'todo-container'}>
        <h1 className='heading'>Manage your Task</h1>
        <TodoForm onAddTask={handleAddTask} darkMode={darkMode} /> {/* Pass darkMode prop */}
      </div>
      <div className='image-container'>
        {showNoTasksImage && todos.length === 0 ? (
          <div className={darkMode? 'dark-gif' :'light-gif'}>
            <img src={giph2} alt="No tasks" style={{ height: '100%', width: '100%' }} ></img>
          </div>
        ) : (
          <TodoList todos={todos} darkMode={darkMode} />        )}
      </div>
    </div>
  );
});

const mapStateToProps = state => ({
  todos: state.todos,
  darkMode: state.darkMode,
});


export default connect(mapStateToProps)(App);
