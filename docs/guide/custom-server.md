---
sidebar_position: 84
id: Custom Server
---

## How to Custom Document

To create a custom error page you can create a `src/server.js` file. `export` with `getPageData`, `modifyHtml`,`renderToHTML` and `middlewares`, all that methods ***only work in server side***.

  - `getPageData` add extra data to application. 
  - `modifyHtml` modify document props.
  - `renderToHTML` last chance to modify rendered html before it be sended to browser.
  - `middlewares` allow add custom middlewares to server for handler request and response.

```javascript
// src/server.js
export const getPageData = () => {
  return {
    foo: 'bar'
  };
};

export const modifyHtml = (documentProps, appContext, context) => {
  documentProps.headTags.push({
    tagName: 'meta',
    attrs: {
      name: 'testDocumentProps'
    }
  });
  return documentProps;
};

export const renderToHTML = (renderToHTML, context) => {
  return async (req, res) => {
    const html = await renderToHTML(req, res);
    console.log('custom-renderToHTML', html);
    return html;
  };
};


export const middlewares = [
  { path: '/health-check:other(.*)', handler: setCookie },
  { path: '/users/:id', handler: user },
  { path: '/profile/:id/setting:other(.*)', handler: setting },
];
```

> `renderToHTML` types is [here](../api/runtime/modules/RouterView.md#irendertohtml) 
> `middlewares` types is [here](../api/runtime/modules/RouterView.md#imiddlewareroutes) 

> `getPageData`, `modifyHtml`,`renderToHTML` only work on SSR mode. middlewares add to server with order by Array order.