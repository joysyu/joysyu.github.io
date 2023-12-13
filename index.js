window.addEventListener(
  "message",
  (event) => {
    if (event.data.source !== "react-devtools-content-script") {
      console.log(event);
    }
  },
  false
);

const frame = document.getElementById("frame");
const button = document.getElementById("button");
button.onclick = () => {
  frame.contentWindow.postMessage(
    {
      api: "opencti_dialpad",
      version: "1.0",
      method: "initiate_call",
      payload: {
        enable_current_tab: true,
        phone_number: "+15103669944",
      },
    },
    "*"
  );
};
