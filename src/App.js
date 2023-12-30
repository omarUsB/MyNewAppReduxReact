
import Home from "./Home";
import AjouterArticle from "./AjouterArticle";
import storeOm from './store/store';
import { Provider } from 'react-redux';
import ListeArticles from "./ListeArticles";
import DetailArticle from "./DetailArticle";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
export default function App() {
      
  return (
<Provider store={storeOm}>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
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
    </BrowserRouter>
</Provider>
  );
}
