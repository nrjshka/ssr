import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routers';

export default (req) => {
  const content = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <Routes />
    </StaticRouter>
  );

  return `
    <html>
      <head>
        <title>Server Side Rendering</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
