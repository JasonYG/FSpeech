let input;

function changePage(Page) {
  let page = Page;
  let content = select("#content");
  content.removeClass("fade-in");
  content.addClass("fade-out");
  setTimeout(function() {
    content.removeClass("fade-out");
    content.addClass("fade-in");
    drawContent(page);
  }, 700);
}


function drawContent(Page) {
  let page = Page;
  removeElements();

  let content = select("#content");
  drawBackObjects(currentState);
  console.log(content.class());
  if (page == -1) {
    //test page
    let inbox;
    let outbox;
    let recStartB;
    let recStopB;

    let divInbox;
    let divButton;
    let divOutbox;

    divInbox = createDiv();
    divInbox.parent(content);

    inbox = createElement("textarea");
    inbox.elt.placeholder = "input goes here";
    inbox.elt.cols = "50";
    inbox.elt.rows = "4";
    inbox.parent(divInbox);

    divButton = createDiv();
    divButton.parent(content);

    recStartB = createButton("record");
    recStartB.mouseReleased(recStart);
    recStartB.parent(divButton);

    recStopB = createButton("stop recording");
    recStopB.mouseReleased(recStop);
    recStopB.parent(divButton);

    divOutbox = createDiv();
    divOutbox.parent(content);

    outbox = createElement("textarea");
    outbox.elt.placeholder = "output goes here";
    outbox.elt.cols = "50";
    outbox.elt.rows = "4";
    outbox.parent(divOutbox);

    function recStart() {
      //start recording here
      let input;
      input = inbox.value();
      console.log(input);
    }

    function recStop() {
      //stop recording, save, put in text to speech, paste into output
      let output;
      outbox.value(output);
      console.log(output);
    }

  }


  if (page == 0) {
    let divText;
    let divHeader;
    let divPara;
    let divButton;

    let header;
    let para;


    divHeader = createDiv();
    divHeader.class("header");
    divHeader.parent(content);

    header = createElement("h1", "placeholder");
    header.parent(divHeader);

    divButton = createDiv();
    divButton.parent(content);

    divPara = createDiv();
    divPara.class("para");
    divPara.parent(content);

    para = createElement("p", "yaw yeet");
    para.parent(divPara);

    divButton = createDiv();
    divButton.class("launchButton");
    divButton.parent(content);

    button = createButton("Get started");
    button.mouseReleased(function() {
      changePage(1);
    });
    button.class("button");
    button.parent(divButton);

  }
  if (page == 1) {
    let inbox;
    let header;
    let bar;
    let divInbox;
    let divButton;
    let divObjects;

    divHeader = createDiv();
    divHeader.class("header2");
    divHeader.parent(content);

    header = createElement("h2", "Step 1: Input Text and Press Enter");
    header.parent(divHeader);

    divObjects = createDiv();
    divObjects.class("objects");
    divObjects.parent(content)

    divInbox = createDiv();
    divInbox.class("inbox");
    divInbox.parent(divObjects);

    inbox = createElement("textarea");
    inbox.elt.placeholder = "input goes here";
    inbox.elt.cols = "80";
    inbox.elt.rows = "15";
    inbox.parent(divInbox);

    divButton = createDiv();
    divButton.class("nextButton");
    divButton.parent(divObjects);

    recStartB = createButton("Enter");
    recStartB.mouseReleased(recStart);
    recStartB.class("button");
    recStartB.parent(divButton);


    function recStart() {
      //start recording here
      input = inbox.value();

      var check = Boolean(input);
      if (check) {
        removeElements();
        changePage(2);
      } else {
        alert("You didn't type in anything!")
      }

    }


  }
  if (page == 2) {
    let divHeader;
    let divText;
    let header;
    let text;
    let button;

    divHeader = createDiv();
    divHeader.parent("content");
    header = createElement("h2", "Step 2: Record Yourself");
    header.position(20, -5);
    header.parent(divHeader);
    button = createButton("Record");
    button.position(500, 20);
    button.mouseReleased(recStart);
    button.parent(divHeader);

    divText = createDiv();
    divText.class("textBox");
    divText.parent("content");
    text = createElement("p", input);
    text.parent(divText);


    function recStart() {
      alert("Recording Started!");
      removeElements();
      changePage(3);
    }


  }
  if (page == 3) {
    let divHeader;
    let header;

    divHeader = createDiv();
    divHeader.parent("content");
    header = createElement("h2", "Loading... ");
    header.position(20, -5);
    header.parent(divHeader);

    alert("Finished Loading!");
    changePage(4);

  }
  if (page == 4) {
    let divHeader;
    let divText;
    let header;
    let button;
    let text;
    let para;

    divHeader = createDiv();
    divHeader.parent("content");
    header = createElement("h2", "Step 3: Review ");
    header.position(20, -5);
    header.parent(divHeader);
    button = createButton("Try Again?");
    button.position(500, 20);
    button.mouseReleased(recStart);
    button.parent(divHeader);


    divText = createDiv();
    divText.class("para");
    divText.parent("content");
    text = createElement("p", input);
    text.parent(divText);

    function recStart() {
      removeElements();
      changePage(1);
    }
  }

}
