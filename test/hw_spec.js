var app = "./app.js"; //now we have access to the entire js file
var expect = require("chai").expect;
var request = require('request');


// describe("One book is added to the library.", function(){
//   it("Add 1 book to library", function(done){
//     expect(bookCount + 1, bookLibrary.length + 1).be.true;
//     done();
//   });
// })

// describe("Testing our library functionality", function() { 
//     it("Should successfully add a book", function(done){ 
//         var myLib = new Library();

//         myLib.add("Arun's Book");

//         expect(myLib.all().length).equal(1);
//         done();
//     });

// describe("Testing our library's show function", function() {
//   it("Show specific books id.", function(done) {
//     var myNewLib = new Library();
//     myNewLib.add("Arun's Book");
//     expect(myNewLib.all()[0].id).equal(1);
//     done();
//   });
// });

// });

// describe("Testing our library's remove functionality", function() { 
//       it("Should successfully remove a book", function(done) { 
//           var myLibAgain = new Library();
//           myLibAgain.add("Aileen's book");
//           myLibAgain.remove(1);

//           expect(myLibAgain.all().length).equal(0);
//           done();

//       });



// });


describe('Google.com', function() {
  it('should have a HTTP of 200 - success', function(done) {
    request('https://google.com/', function(err, res, body) {

      expect(res.statusCode).to.equal(200)
      // expect(res.statusCode).to.equal(300)
      done();
    })
  })
});

describe('Amazon.com', function() {
  it('should have a HTTP of 200 - success', function(done) {
    this.timeout(5000);
    request('http://amazon.com', function(err, res, body) {

      expect(res.statusCode).to.equal(200)
      console.log("err " + err + "res " + res + "body " + body);
      done();
    })
  })
});


describe('http://localhost:3000/api/phrases', function() {
  it('should have a HTTP of 200 - success', function(done) {
    request('http://localhost:3000/api/phrases/', function(err, res, body) {

      expect(res.statusCode).to.equal(200)
      console.log("err " + err + "res " + res + "body " + body);
      done();
    })
  })
});

//GET
describe('http://localhost:3000', function() {
  it('should have a HTTP of 200 - success', function(done) {
    request('http://localhost:3000/api/phrases/', function(err, res, body) {

      expect(res.statusCode).to.equal(200)
      done();
    })
  }) 
  it("Should receive the post request", function(done) {
      request.post({url:'http://localhost:3000/api/phrases', form: {key: 'value'}}, function(err, res, body) {
        console.log("res", res);
        console.log("err", err);
        console.log("body", body);
        expect(res.statusCode).to.equal(200)
        done();
      })
  })
  it("Should receive the put request", function(done) { 

  })

});

//POST



// //POST
//    request.post('http://localhost:3000', {form: user}, function(err, res, body) {
//      expect(res.statusCode).to.equal(200);
//      // expect(res.statusCode).to.equal(300)
//      console.log("NEW USER" + user);

//      done();
//    })
//  });
// });

