import React,{ lazy, Suspense }  from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
// import LandingPage from './Component/LandingPage/LandingPage';
const LandingPage = lazy(async () =>
  import("./Component/LandingPage/LandingPage")
);
const PostPage = lazy(async () =>
  import("./Component/Post/Post")
);
const GalleryPage = lazy(async () =>
  import("./Component/Gallery/Gallery")
);
const TodoPage = lazy(async () =>
  import("./Component/Todo/Todo")
);
const PrivateRoute = lazy(async () =>
  import("./ShareModule/PrivateRoute")
);
const ProfilePage = lazy(async () => import("./Component/Profile/Profile"))
function App() {
  return (
    <div className="App">
    {/* <LandingPage/> */}
  <Router>
        <Suspense fallback={<h1>Loading</h1>}>
          <Routes path="/*">
            <Route
              index
              element={
                  <LandingPage />
              }
            />
             <Route
              path="/Profile"
              element={
                <PrivateRoute>
                  <ProfilePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/Post"
              element={
                <PrivateRoute>
                  <PostPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/Gallery"
              element={
                <PrivateRoute>
                  <GalleryPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/Todo"
              element={
                <PrivateRoute>
                  <TodoPage />
                </PrivateRoute>
              }
            />
           
          </Routes>
        </Suspense>
      </Router> 
   </div>
  );
}

export default App;
