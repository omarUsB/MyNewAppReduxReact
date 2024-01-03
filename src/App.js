
import Home from "./Home";
import AjouterArticle from "./AjouterArticle";
import storeOm from './store/store';
import { Provider } from 'react-redux';
import ListeArticles from "./ListeArticles";
import DetailArticle from "./DetailArticle";
import { HashRouter } from "react-router-dom";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Users from "./users";
import Contact from "./contact";
import Login from "./login";

export default function App() {
      
  return (
<Provider store={storeOm}>
<HashRouter>
      <Routes>
        <Route path="/" element={<Users />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route
          path="/AjouterArticle"
          element={
            <AjouterArticle  />
          }></Route>
        <Route
          path="/ListeArticles"
          element={<ListeArticles />}></Route>
        <Route
          path="/DetailArticle/:id"
          element={<DetailArticle  />}></Route>
      </Routes>
    </HashRouter>
</Provider>
  );
}





