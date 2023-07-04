import { ThemeProvider } from "@myob/myob-widgets";
import InvoiceDetailView from "./InvoiceDetail/InvoiceDetailView";
import InvoicesListView from './InvoiceList/InvoicesListView';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme="classic">
        {/* <InvoicesListView/> */}
        <InvoiceDetailView />
      </ThemeProvider>
    </div>
  );
}

export default App;
