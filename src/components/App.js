import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import NotesList from './notes/NotesList';
import history from '../history';
import Header from './Header';
import NoteShow from './notes/NoteShow';
import NoteCreate from './notes/NoteCreate';
import NoteEdit from './notes/NoteEdit';

const App = () => {
    return (
        <Router history={history}>
            <div>
                <Header />
                <main role="main" className="container">
                    <Switch>
                        <Route path="/" exact component={NotesList} />
                        <Route path="/note/new" exact component={NoteCreate} />
                        <Route path="/note/edit/:id" exact component={NoteEdit} />
                        <Route path="/note/:id" component={NoteShow} />
                    </Switch>
                </main>
            </div>
        </Router>
    );
};

export default App;