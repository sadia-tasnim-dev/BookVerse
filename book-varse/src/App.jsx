import { Toaster } from "sonner";
import { AppRouter } from "./Router/AllRoute";

function App() {
  return (
    <>
      <AppRouter />
      <Toaster richColors />
    </>
  );
}

export default App;
