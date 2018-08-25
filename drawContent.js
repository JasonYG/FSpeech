let input;

function changePage(Page) {
  let page = Page;
  let content = select("#content");

  if(page == 1){
    animationHandler = 0;
    currentState = 2;
  }
  if(page == 4){
    animationHandler = 0;
    currentState = 4;
  }

  content.style("animation", "none");
  content.style("animation", "fade-out 0.7s");
  setTimeout(function () {
    content.style("animation", "none");
    content.style("animation", "fade-in 0.7s");

    if(page == 0){
      currentState = 0;
    }else if(page == 4){
      currentState = 3;
    }
    else{
      currentState = 1;

    }
    drawBackObjects(currentState);
    drawContent(page);
  }, 700);




}


function drawContent(Page) {
  let page = Page;
  removeElements();

  let content = select("#content");

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
    divObjects.parent(content);

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
      divHeader.class("header2");
    divHeader.parent("content");

    header = createElement("h2", "Step 2: Record Yourself");
    header.parent(divHeader);

    divButton = createDiv();
    divButton.class("nextButton");
    divButton.parent("content")

    button = createButton("");
    button.mouseReleased(recStart);
    button.class("buttonIcon");
    button.parent(divButton);

    buttonIcon = createElement("i");
    buttonIcon.class("fa fa-microphone");
    buttonIcon.parent(button);

    divText = createDiv();
    divText.class("inbox");
    divText.parent("content");
    text = createElement("textarea", input);
    text.elt.readOnly = "true";
    text.elt.cols = "80";
    text.elt.rows = "15";
    text.parent(divText);


    function recStart() {
      alert("Recording Started!");
      removeElements();
      changePage(3);
    }


  }
  if (page == 3) {
    let divHeader;
    let divText;
    let header;
    let button;
    let text;
    let para;

    divHeader = createDiv();
    divHeader.parent("content");
    divHeader.class("header2");

    header = createElement("h2", "Step 3: Review ");
    header.parent(divHeader);

    button = createButton("Try Again?");
    button.position(500, 20);
    button.mouseReleased(recStart);
    button.class("button");
    button.parent(divHeader);

/*
    divText = createDiv();
    divText.class("para");
    divText.parent("content");
    text = createElement("p", input);
    text.parent(divText);
*/
    function recStart() {
      removeElements();
      changePage(1);
    }
  }

}
