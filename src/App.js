import { HashRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@myob/myob-widgets";
import InvoiceDetailView from "./InvoiceDetail/InvoiceDetailView";
import InvoicesListView from "./InvoiceList/InvoicesListView";
import Home from './Home';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <ThemeProvider theme="classic">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/list" element={<InvoicesListView />}/>
            <Route path="/detail" element={<InvoiceDetailView />}/>
          </Routes>
        </ThemeProvider>
      </div>
    </HashRouter>
  );
}

export default App;
