import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import ArticleList from "./components/ArticleList";

function App() {



  return (
    <>
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/article/:id" element={<></>}/>


          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
