function drawContent(Page) {
  let page = Page;
  removeElements();

  let content = select("#content");
  content.removeClass("fade-in");
  content.addClass("fade-in");
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
    button.mouseReleased(function() { drawContent(1);});
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

    header = createElement("h2","Step 1: Input Text and press Enter!");
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
      let input;
      input = inbox.value();
      console.log(input); //For Testing Purposes
      drawContent(2);
    }


  }
  if (page == 2) {
    // record self
  }
  if (page == 3) {
    // processing
  }
  if (page == 4) {
    // review
  }

}
