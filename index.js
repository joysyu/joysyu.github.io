window.addEventListener(
  "message",
  (event) => {
    if (event.data.source !== "react-devtools-content-script") {
      console.log(event);
    }
    const div = document.getElementById("abc");
    div.innerHTML = event;
  },
  false
);

function initiateCall() {
  console.log("clicked!");
  const frame = document.getElementById("frame");
  console.log(frame);
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
    "https://dialpad.com"
  );
}
