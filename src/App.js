import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loader from './components/Loader'
import Header from './components/Header'
import './App.scss'

const Footer = lazy(() => import('./components/Footer'))
const Shows = lazy(() => import('./pages/Shows'))
const ShowInfo = lazy(() => import('./pages/ShowInfo'))
const PersonInfo = lazy(() => import('./pages/PersonInfo'))
const CharacterInfo = lazy(() => import('./pages/CharacterInfo'))
const EpisodeInfo = lazy(() => import('./pages/EpisodeInfo'))

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Shows />
              </Suspense>
            }
          />
          <Route
            path="/shows/page/:pageNumber"
            element={
              <Suspense fallback={<Loader />}>
                <Shows />
              </Suspense>
            }
          />
          <Route
            path="/search/shows/:name"
            element={
              <Suspense fallback={<Loader />}>
                <Shows />
              </Suspense>
            }
          />
          <Route
            path="/shows/:id"
            element={
              <Suspense fallback={<Loader />}>
                <ShowInfo />
              </Suspense>
            }
          />
          <Route
            path="/episodes/:id"
            element={
              <Suspense fallback={<Loader />}>
                <EpisodeInfo />
              </Suspense>
            }
          />
          <Route
            path="/people/:id"
            element={
              <Suspense fallback={<Loader />}>
                <PersonInfo />
              </Suspense>
            }
          />
          <Route
            path="/characters/:id"
            element={
              <Suspense fallback={<Loader />}>
                <CharacterInfo />
              </Suspense>
            }
          />
        </Routes>
      </main>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </Router>
  )
}

export default App
