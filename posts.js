var genericPost = {
  x: 0,
  y: 0,
  postNum: undefined,
  connectionsTo: undefined,
  sendRopeTo: function(connectedPost) {
    if (this.connectionsTo == undefined) {
      var postArray = [];
      postArray.push(connectedPost);
      this.connectionsTo = postArray;
    } else {
      this.connectionsTo.push(connectedPost);
    }
  }
};

// create post1 and post2
var post1 = Object.create( genericPost );
var post2 = Object.create( genericPost );

// modify the post properties
post1.x = -2;
post1.y = 4;
post1.postNum = 1;
post2.x = 5;
post2.y = 1;
post2.postNum = 2;

// connect the posts together
post1.sendRopeTo(post2);
post2.sendRopeTo(post1);

// create post8, post9, and post10
var post8 = Object.create( genericPost );
var post9 = Object.create( genericPost );
var post10 = Object.create( genericPost );


// assign property values and make connections
post8.x = 0;
post8.y = -3;
post8.postNum = 8;

post9.x = 6;
post9.y = 8;
post9.postNum = 9;

post10.x = -2;
post10.y = 3;
post10.postNum = 10;

post8.sendRopeTo(post10);
post9.sendRopeTo(post10);
post10.sendRopeTo(post8);
post10.sendRopeTo(post9);

post9.numBirds = 0;
post10.weathervane = "N";
post8.lightsOn = false;
post10.lightsOn = false;


for (var i = 0; i < genericPost.postArray.length; i++) {
  if( genericPost.postArray[i].y % 2 === 0 ) {
    genericPost.postArray[i].numBirds = 0;
  }
  if( genericPost.postArray[i].connectionsTo.includes(9) ) {
    genericPost.postArray[i].weathervane = "N";
  }
  if( genericPost.postArray[i].postNum % 2 === 0 ) {
    genericPost.postArray[i].lightsOn = false;
  }
}

function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
}

Fencepost.prototype = {
  sendRopeTo: function(connectedPost) {
    this.connectionsTo.push(connectedPost);
  };
  removeRope: function(removeTo) {
    var temp = [];
    for (var i = 0; i < this.connectionsTo.length; i++) {
      if (this.connectionsTo[i].postNum != removeTo) {
        temp.push(this.connectionsTo[i]);
      }
    }
    this.connectionsTo = temp;
  };
  movePost: function(x, y) {
    this.x = x;
    this.y = y;
  };
};


// create post18, post19, and post20
var post18 = new Fencepost(-3, 4, 18);
var post19 = new Fencepost(5, -1, 19);
var post20 = new Fencepost(-2, 10, 20);


// establish post connections
post18.sendRopeTo(post20);
post20.sendRopeTo(post18);
post18.sendRopeTo(post19);
post19.sendRopeTo(post18);

Fencepost.prototype.valueOf = function() {
  return Math.sqrt(this.x*this.x + this.y*this.y);
};

// override the toString method
Fencepost.prototype.toString = function() {
  var postList = "";
  for (var i = 0; i < this.connectionsTo.length; i++) {
    postList = postList + this.connectionsTo[i] + "\n";
  };
  return "Fence post #" + this.postNum + ":\nConnected to posts:\n" + postList + "Distance from ranch: " + this.valueOf() + " yards";
};
