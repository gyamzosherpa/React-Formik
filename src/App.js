import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FormValidation from './FormValidation/FormValidation';
import FormV from './FormValidation/FormV';
function App() {
  return (
    <>
      <h1>Formik</h1>
      <Router>
        <Switch>
          {/* Formik Validation  */}
          <Route exact path="/form" component={FormValidation} />
          <Route exact path="/form2" component={FormV} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
