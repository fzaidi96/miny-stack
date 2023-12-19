console.log("test");

// what do we want to achieve
// we want to call the api
// get the response message
//put my message on the page

// so how do we call an api - with fetch

async function getMessage() {
  const response = await fetch(
    "https://miny-stack-server-dxd3.onrender.com/message"
  );
  // after we got the response from the api with fetch, we gonna turn it into json
  const json = await response.json();
  // now display message with DOM maniuplation
  const p = document.getElementById("message");
  p.textContent = json.message;
}

getMessage();
