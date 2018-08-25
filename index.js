
function setup() {
  let inbox;
  let outbox;
  let b_rec_start;
  let b_rec_stop;

  let input;
  let output;

  inbox = createElement("textarea");
  inbox.elt.placeholder = "input goes here";
  inbox.elt.cols = "50";
  inbox.elt.rows = "4";
  inbox.html("yeet");

  b_rec_start = createButton("record");
  b_rec_start.mouseReleased(rec_start);

  b_rec_stop = createButton("stop recording");
  b_rec_stop.mouseReleased(rec_stop);

  outbox = createElement("textarea");
  outbox.elt.placeholder = "output goes here";
  outbox.elt.cols = "50";
  outbox.elt.rows = "4";

  //background(0);
}


function rec_start(){
  input = inbox.html();
  console.log(input);

  //start recording here
}

function rec_stop(){
  //stop recording, save, put in text to speech, paste into output

  outbox.value(output);
  console.log(output);
}
