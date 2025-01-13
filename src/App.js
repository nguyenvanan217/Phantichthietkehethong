import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuangBaPage from './Page/QuangBaPage/QuangBaPage';
import TourDuLich from './Page/TourDuLich/TourDuLich';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import ViewTourBooked from './component/ViewTourBooked/ViewTourBooked';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={QuangBaPage} />
                <Route path="/tour-du-lich" component={TourDuLich} />
                <Route path="/view-tour-booked" component={ViewTourBooked} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </Switch>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </Router>
    );
}

export default App;
