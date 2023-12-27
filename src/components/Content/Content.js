import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Search from '../../views/Search/Search';
import Detail from '../../views/Detail/Detail';
import './Content.scss';

const Content = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <main className="main-content" role="main">
      <Switch>
        <Route exact path="/items" render={() => <Search search={query.get('search')} />} />
        <Route path="/items/:id" render={(props) => <Detail {...props} />} />
      </Switch>
    </main>
  );
};

export default Content;
