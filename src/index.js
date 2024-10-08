import React from "react";
import { createRoot } from 'react-dom/client';

import './index.css';
import App from "./components/App";

const container = document.getElementById('react-app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
