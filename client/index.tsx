import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';
import App from './App';

let container = document.getElementById("root")!;
let root = createRoot(container)

const lightSchemeIcon = document.querySelector('link#light-scheme-favicon');
const darkSchemeIcon = document.querySelector('link#dark-scheme-favicon');

let matcher: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
function updateFaviconScheme() {
  if (matcher.matches) {
    if (lightSchemeIcon != null) lightSchemeIcon.remove();
    if (darkSchemeIcon != null) document.head.append(darkSchemeIcon);
  } else {
    if (darkSchemeIcon != null) darkSchemeIcon.remove();
    if (lightSchemeIcon != null) document.head.append(lightSchemeIcon);
  }
}
matcher.addEventListener('change', updateFaviconScheme);
updateFaviconScheme();

root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);
