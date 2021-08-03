import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { options, items } from '../../static-data';
import Accordion from '../accordion/Accordion';
import Search from '../search/Search';
import DropDown from '../dropdown/DropDown';
import Translate from '../translator/Translate';
import './Router.scss';

const RouterComponent = () => {
  return (
    <Router>
      <div className="container">
        <ul className="container-ul">
          <li className="container-ul--li">
            <Link to="/">Accordion</Link>
          </li>
          <li className="container-ul--li">
            <Link to="/search">Search</Link>
          </li>
          <li className="container-ul--li">
            <Link to="/dropdown">Dropdown</Link>
          </li>
          <li className="container-ul--li">
            <Link to="/translate">Translator</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Accordion items={items} />
          </Route>

          <Route path="/search" component={Search} />

          <Route path="/dropdown">
            <DropDown options={options} />
          </Route>
          <Route path="/translate" component={Translate} />
        </Switch>
      </div>
    </Router>
  );
};
export default RouterComponent;
