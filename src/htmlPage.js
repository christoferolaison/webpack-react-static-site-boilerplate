
export default ({ app = '', main = '', title = 'webpack-react-static-site-boilerplate' }) => `
  <!DOCTYPE HTML>
  <html>
    <head>
     <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      <div id="app">${app}</div>
      <script src=${main}></script>
    </body>
  </html>
`
