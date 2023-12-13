window.addEventListener(
  "message",
  (event) => {
    if (event.data.source !== "react-devtools-content-script") {
      console.log(event);
    }
  },
  false
);
