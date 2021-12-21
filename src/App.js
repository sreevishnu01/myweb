import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Blog from './components/myBlog/Blog';
import About from './components/myProfile/About';
import Landing from './components/myProfile/Landing';
import Skill from './components/myProfile/Skill';
import Work from './components/myProfile/Work';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='' element={<Landing />} />
            <Route path='toabout' element={<About />} />
            <Route path='toskill' element={<Skill />} />
            <Route path='towork' element={<Work />} />
          </Route>
          <Route path='/myblog' element={<Blog />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
