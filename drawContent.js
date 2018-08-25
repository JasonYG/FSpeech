let input;

function changePage(Page) {
  let page = Page;
  let content = select("#content");

  if(page == 1){
    animationHandler = 0;
    currentState = 2;
  }
  if(page == 3){
    animationHandler = 0;
    currentState = 4;
  }

  content.style("animation", "fade-out 0.7s");
  setTimeout(function () {
    content.style("animation", "none");
    content.style("animation", "fade-in 0.7s");

    if(page == 0){
      currentState = 0;
    }else if(page == 3){
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

    header = createElement("h1", "F Speaking");
    header.parent(divHeader);

    divButton = createDiv();
    divButton.parent(content);

    divPara = createDiv();
    divPara.class("para");
    divPara.parent(content);

    para = createElement("p", "F stands for fix");
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


    divInbox = createDiv();
    divInbox.class("inbox");
    divInbox.parent("content");

    inbox = createElement("textarea");
    inbox.elt.placeholder = "input goes here";
    inbox.elt.cols = "80";
    inbox.elt.rows = "15";
    inbox.parent(divInbox);

    divButton = createDiv();
    divButton.class("nextButton");
    divButton.parent("content");

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
    let divButton;
    let divNext;

    let header;
    let text;
    let button;
    let buttonNext;



    divHeader = createDiv();
    divHeader.class("header2");
    divHeader.parent("content");

    header = createElement("h2", "Step 2: Record Yourself");
    header.parent(divHeader);

    divText = createDiv();
    divText.class("inbox");
    divText.parent("content");
    text = createElement("textarea", input);
    text.elt.readOnly = "true";
    text.elt.cols = "80";
    text.elt.rows = "15";
    text.parent(divText);

    divButton = createDiv();
    divButton.class("recButton");
    divButton.parent("content")

    button = createButton("");
    button.mouseReleased(recStart);
    button.class("buttonIcon");
    button.parent(divButton);

    buttonIcon = createElement("i");
    buttonIcon.class("fa fa-microphone");
    buttonIcon.parent(button);

    divNext = createDiv();
    divNext.class("nextButton");
    divNext.parent("content");
    divNext.hide();

    buttonNext = createButton("Next");
    buttonNext.mouseReleased(next);
    buttonNext.class("button");
    buttonNext.parent(divNext);





    function recStart() {
      //alert("Recording Started!");
      buttonIcon.class("fa fa-stop");
      button.mouseReleased(recStop);
      divNext.hide();
    }

    function recStop(){
      buttonIcon.class("fa fa-repeat");
      button.mouseReleased(recStart);
      divNext.show();
      //changePage(3);
    }

    function next(){
      changePage(3);
    }


  }
  if (page == 3) {
    let divHeader;
    let divButton;
    let divText;

    let header;
    let button;
    let text;

    divHeader = createDiv();
    divHeader.parent("content");
    divHeader.class("header2");

    header = createElement("h2", "Step 3: Review");
    header.parent(divHeader);

    divText = createDiv();
    divText.class("reviewBox");
    divText.parent("content");

    pasteText = createElement("textarea", input);
    pasteText.elt.readOnly = "true";
    pasteText.elt.cols = "75";
    pasteText.elt.rows = "20";
    pasteText.parent(divText);

    speechText = createElement("textarea", input);
    speechText.elt.readOnly = "true";
    speechText.elt.cols = "75";
    speechText.elt.rows = "20";
    speechText.parent(divText);

    divButton = createDiv();
    divButton.parent("content");
    divButton.class("nextButton");

    button = createButton("Try Again?");
    button.mouseReleased(recStart);
    button.class("button");
    button.parent(divButton);

    function recStart() {
      removeElements();
      changePage(1);
    }
  }

}
