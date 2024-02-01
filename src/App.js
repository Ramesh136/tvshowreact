
import { Outlet, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import TvPage from './components/TvPage';
import SideBarNav from './components/SideBardNav';
import MainContainer from './components/MainContainer';
import WatchList from './components/WatchList';
import Upgrade from './components/Upgrade';
import NewsLetter from './components/NewsLetter';

export const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children : [
        { path : '/',
          element : <MainContainer/>
        },
        {
          path:'/tvpage',
          element : <TvPage />
        }
        ,
        {
          path:'/watchlist',
          element : <WatchList />
        }
        ,
        {
          path:'/upgrade',
          element : <Upgrade />
        }
        ,
        {
          path:'/newsletter',
          element : <NewsLetter />
        }


    ],
  }
])

function App() {
  return <div>
    <div className='h-full w-64 flex-col fixed inset-y-0 z-50'>
        <SideBarNav />
      </div>
      <div className='inset-x-0 bg-white z-1'>
      <Header />
      </div>
      <div className='ml-64 relative p-2'>
        <Outlet />
      </div>
  </div>
}

export default App;
