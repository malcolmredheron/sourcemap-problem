# Instructions

- Run one of `npm run dev` or `npm run dev-minimize`
- Load `http://localhost:8080/` in the browser
- Open the debugger and check for source files:
  - If you ran `dev` you should see many sources files under `webpack:///`,
    including `./src/JsLib.js`
  - If you ran `dev-minimize` then in my experience you'll only see
    `dist/JsEntry.js`
