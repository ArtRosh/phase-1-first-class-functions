// function Monday() {
//     runFiveMiles();
//     liftWeights();
//   }

//   function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
//   }

//   function Monday() {
//     exerciseRoutine(liftWeights);
//   }
  
//   function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
//   }

function receivesAFunction(callback){
   callback();
}

function returnsANamedFunction(){
    return function namedFanction(){

    }
}

function returnsAnAnonymousFunction(){
    return function (){

    }
}