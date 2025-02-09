import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Whook from "./pages/Whook";
import Event from "./pages/Event";
import News from "./pages/News";
import Store from "./pages/Store";
import ChargingStation from "./pages/ChargingStation";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whook" element={<Whook />} />
            <Route path="/event" element={<Event />} />
            <Route path="/news" element={<News />} />
            <Route path="/store" element={<Store />} />
            <Route path="/charging-station" element={<ChargingStation />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
