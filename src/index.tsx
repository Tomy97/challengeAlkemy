import { createRoot } from 'react-dom/client';
import App from "./App";
import '../src/index.css'
import { PrimeReactProvider } from 'primereact/api';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
);
} else {
  console.error("No se encontró el elemento con id 'root'.");
}