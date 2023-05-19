/** @format */
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense} from "react";
import { SharedLayout } from "./containers/SharedLayout";
import { ThemeProvider } from "styled-components";
import { theme } from './utils/theme';
import { Loader } from "./components/Loader/Loader";

const Home = lazy(() => import('./components/HomePage/HomePage'));
const Tweets = lazy(() => import('./components/TweetsPage/TweetsPage'));
const NotFound= lazy(()=> import('./components/PageNotFound/PageNotFound'))

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path='/tweets' element={<Tweets />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
