import './App.css';
import { TestContainer } from './containers/TestContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/Layout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<TestContainer />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
