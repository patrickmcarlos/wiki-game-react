import { TestContainer } from './containers/TestContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './components';

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
