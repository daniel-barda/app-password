import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShareLayout from "./components/shareLayout";
import { Home, FAQ, ContactUs, Error } from "./pages/index";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route to="/" element={<ShareLayout />}>
            <Route index element={<Home />} />
            <Route path="FAQ" element={<FAQ />} />
            <Route path="ContactUs" element={<ContactUs />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
