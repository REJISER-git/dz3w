import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';
import TodosPage from './pages/TodosPage/TodosPage';
import styles from './App.css';

const App = () => {
    return (
        <Router>
            <div className={styles.app}>
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/todos" element={<TodosPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;