import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserProfile } from "./pages/UserProfile";
import { NotFound } from "./pages/NotFound";
import { Footer } from "./components/Footer";

//import conetxt
import { UserListProvider } from "./context/UserList";
function App() {
  return (
    <UserListProvider>
      <div className="App h-screen">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/UserProfile" element={<UserProfile />}>
            <Route path=":UserProfile" element={<UserProfile />} />
          </Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </div>
    </UserListProvider>
  );
}

export default App;
