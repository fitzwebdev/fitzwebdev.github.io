var facts = [
    'Red hair is a beautiful genetic mutation.',
    'Less than 2% of the world\'s population have red hair.',
    'Red hair can occur in any ethnicity.',
    'Redhead\'s have more sex.',
    'Red hair is thicker than other colours.',
    'Redheads are more likely to develop skin cancer.',
    'Blue eyed redheads are super rare.',
    'Redheads can change temperature quicker.',
    'Redheads don\'t go grey.',
    'People with red hair are more likely to be left-handed.',
    'Redheads need more anaesthetic than others.',
    'They\'re traditionally funny.',
    'They were historically thought to be savage and wild people.',
    'Bees are more attracted to them.'
]

function newFact(){
var randomNumber = Math.floor(Math.random() * (facts.length));
document.getElementById('factDisplay').innerHTML = facts[randomNumber];
}