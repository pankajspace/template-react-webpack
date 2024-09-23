import './index.css';
import webpackLogo from "./images/webpack.png";

const image = document.querySelector("#image");
image.src = webpackLogo;

// React code
import React from "react";
import { createRoot } from 'react-dom/client';

import App from "./components/App";

const container = document.getElementById('react-app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);