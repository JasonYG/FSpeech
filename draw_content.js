function draw_content(Page=-1){
  let page = Page;

  removeElements();

  if(page == -1){
    //test page
    let inbox;
    let outbox;
    let b_rec_start;
    let b_rec_stop;

    let input;
    let output;

    let div_inbox;
    let div_button;
    let div_outbox;

    div_inbox = createDiv();
    div_inbox.parent("content");

    inbox = createElement("textarea");
    inbox.elt.placeholder = "input goes here";
    inbox.elt.cols = "50";
    inbox.elt.rows = "4";
    inbox.parent(div_inbox);

    div_button = createDiv();
    div_button.parent("content");

    b_rec_start = createButton("record");
    b_rec_start.mouseReleased(rec_start);
    b_rec_start.parent(div_button);

    b_rec_stop = createButton("stop recording");
    b_rec_stop.mouseReleased(rec_stop);
    b_rec_stop.parent(div_button);

    div_outbox = createDiv();
    div_outbox.parent("content");

    outbox = createElement("textarea");
    outbox.elt.placeholder = "output goes here";
    outbox.elt.cols = "50";
    outbox.elt.rows = "4";
    outbox.parent(div_outbox);

    function rec_start(){
      input = inbox.value();
      console.log(input);
      //start recording here
    }

    function rec_stop(){
      //stop recording, save, put in text to speech, paste into output

      outbox.value(output);
      console.log(output);
    }

  }

  if(page == 0){
    // launch page
  }
  if(page == 1){
    // paste speech
  }
  if(page == 2){
    // record self
  }
  if(page == 3){
    // processing
  }
  if(page == 4){
    // review
  }


}
