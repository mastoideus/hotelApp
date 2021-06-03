import React from 'react'
import Layout from './Layout/Layout'
import Main from './Main/Main'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import RoomsPage from './RoomsPage/RoomsPage'
import ContactPage from '../src/ContactPage/ContactPage'
import SingleRoomPage from './SingleRoomPage/SingleRoomPage'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Layout>
        <Switch>
        <Route path='/rooms' component={RoomsPage}/>
        <Route path='/contact' component={ContactPage}/>
        <Route path='/:id' component={SingleRoomPage}/>
        <Route path='/' exact component={Main}/>
        </Switch>
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
