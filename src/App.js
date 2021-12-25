import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home';
import MainCards from './components/layout/cards/MainCards';
import Blog from './components/myBlog/Blog';
import Work from './components/work/Work';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='' element={<Navigate replace to="/home" />} />
            <Route path='towork' element={<Work />} />
            <Route path=':paramId' element={<MainCards />} />
          </Route>
          <Route path='/myblog' element={<Blog />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
