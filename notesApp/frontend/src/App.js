import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <div className="container dark">
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<NotesListPage />} />
          <Route path="/note/:id" element={<NotePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
