import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import QuangBaPage from './Page/QuangBaPage/QuangBaPage';
import TourDuLich from './Page/TourDuLich/TourDuLich';
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={QuangBaPage} />
                <Route path="/tour-du-lich" component={TourDuLich} />
            </Switch>
        </Router>
    );
}

export default App;
