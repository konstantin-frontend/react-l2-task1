import { useState } from 'react';
import { createElement } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Декларативный код

function App() {
  const [count, setCount] = useState(0);

  const viteLogoLink = createElement(
    'a',
    { href: 'https://vite.dev', target: '_blank' },
    createElement('img', {
      src: `${viteLogo}`,
      className: 'logo',
      alt: 'Vite logo',
    }),
  );

  const reactLogoLink = createElement(
    'a',
    { href: 'https://react.dev', target: '_blank' },
    createElement('img', {
      src: `${reactLogo}`,
      className: 'logo react',
      alt: 'React logo',
    }),
  );

  const divLogos = createElement('div', {}, [viteLogoLink, reactLogoLink]);

  const h1 = createElement('h1', {}, 'Vite + React');

  const buttonCounter = createElement(
    'button',
    {
      onClick: () => setCount((count) => count + 1),
    },
    `count is ${count}`,
  );

  const reminderEdit = createElement(
    'p',
    {},
    'Edit <code>src/App.jsx</code> and save to test HMR',
  );

  const divCard = createElement('div', { className: 'card' }, [
    buttonCounter,
    reminderEdit,
  ]);

  const readTheDocs = createElement(
    'p',
    { className: 'read-the-docs' },
    'Click on the Vite and React logos to learn more',
  );

  const currentYear = createElement(
    'div',
    {},
    `${new Date().getFullYear()} год`,
  );

  return (
    <>
      {divLogos} {h1} {divCard} {readTheDocs} {currentYear}
    </>
  );
}

export default App;
