const get = id => document.getElementById(id);

const MAX_CHARS = 140;
let text = get('string');
let btn = get('btn');
let counter = get('counterFooter');

// initialise disable tweet if length is 0
let tweet = text.value;
if(tweet.length == 0) {
    btn.classList.add('buttonDisabled');
    btn.style.cursor = 'default';
    text.style.outline = "none !important";
    text.style.border = "1px solid red";
    text.style.boxShadow = "0 0 10px #719ECE";
}

text.addEventListener('keyup', () => {
    let charLength = text.value.length;
    let charRemaining = MAX_CHARS - charLength;

    // update remaing characters to user
    counter.innerText = `${charRemaining} / ${MAX_CHARS}`;    

    if(charLength == 0) {
        counter.style.color = 'black';
        btn.classList.add('buttonDisabled');
        btn.style.cursor = 'default';
        text.style.outline = "none !important";
        text.style.border = "1px solid red";
        text.style.boxShadow = "0 0 10px #719ECE";
    } else if(charRemaining < 0) {  
        btn.classList.add('buttonDisabled');
        btn.style.cursor = 'default';
        text.style.outline = "none !important";
        text.style.border = "1px solid red";
        text.style.boxShadow = "0 0 10px #719ECE";
    } else if(charRemaining <=20) {
        counter.style.color = 'red';
        btn.classList.remove('buttonDisabled');
        btn.style.cursor = 'pointer';
        text.style.outline = "unset";
        text.style.border = "1px solid white";
        text.style.boxShadow = "0 0 0 #719ECE";
    } else {
        counter.style.color = 'black';
        btn.classList.remove('buttonDisabled');
        btn.style.cursor = 'pointer';
        text.style.outline = "unset";
        text.style.border = "1px solid white";
        text.style.boxShadow = "0 0 0 #719ECE";
    }
});

btn.addEventListener('click', function() {
    let tweet = text.value;

    // send tweet if value less or equal to MAX_CHARS 
    if(tweet.length > 0 && tweet.length <= MAX_CHARS) {
        let postTweet = `https://twitter.com/intent/tweet?text=${tweet}`;
        window.open(postTweet, '_blank');
    }
});