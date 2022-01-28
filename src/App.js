import { BrowserRouter, Routes ,Route, NavLink} from 'react-router-dom';
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import AboutPage from './page/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';


function App() 
{   
    return(
        <FeedbackProvider>
            <BrowserRouter>
                <Header />
                <div className="container">
                    <div className='nav'>
                        <NavLink 
                        to='/'
                        activeClassName="active">
                            Homepage
                        </NavLink>
                        <NavLink 
                        to='/about' 
                        activeClassName="active">
                            About
                        </NavLink>
                    </div>
                    <Routes>
                        <Route 
                            exact path='/'
                            element=
                            {
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                </>
                            }> 
                        </Route>
                        <Route path='/about' element={ <AboutPage /> } />
                    </Routes>
                </div>
            </BrowserRouter>
        </FeedbackProvider>
    )
}
export default App;
