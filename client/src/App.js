import React from "react";
import Header from "./components/Header/Header";
import Chats from "./components/Chats/Chats";
import ChatScreen from "./components/Chatscreen/ChatScreen";
import TinderCards from "./components/TinderCards/TinderCards";
import SwipeButtons from "./components/SwipeButton/SwipeButtons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route exact path="/chat">
            <Header backButton="/" />
            {/* backButton props passed to header */}
            <Chats />
          </Route>
          <Route exact path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
