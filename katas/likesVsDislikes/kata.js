// Like, Dislike, Nothing come from Preloaded

let Dislike = 'Dislike',
    Like = 'Like',
    Nothing = 'Nothing';

function likeOrDislike(buttons) {
    return buttons.reduce((prev, cur) => cur == prev ? Nothing : cur, Nothing)
}


console.log(likeOrDislike([Dislike]));
// Dislike

console.log(likeOrDislike([Like, Like]));
// Nothing

console.log(likeOrDislike([Dislike, Like]));
// Like

console.log(likeOrDislike([Like, Dislike, Dislike]));
// Nothing

console.log(likeOrDislike([Dislike, Dislike]));
// Nothing 

console.log(likeOrDislike([Like, Like, Like]));
// Like 

console.log(likeOrDislike([Like, Dislike]));
// Dislike 

console.log(likeOrDislike([Dislike, Like, Dislike]));
// Dislike 

console.log(likeOrDislike([Like, Like, Dislike, Like, Like, Like, Like, Dislike]));
// Dislike 

console.log(likeOrDislike([]));
// Nothing 
