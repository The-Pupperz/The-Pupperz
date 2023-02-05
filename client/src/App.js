import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './styles/App.css';
import Nav from './components/Nav';
import Landing from './components/Landing';
import Home from './components/Home';
import Support from './components/Support';
import Settings from './components/Settings';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("auth_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className=' w-full h-screen bg-[#040F16]'>
                     
            <Nav />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Support' element={<Support />} />
            <Route path='/Settings' element={<Settings />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Login' element={<Login />} />
          </Routes>
            <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
