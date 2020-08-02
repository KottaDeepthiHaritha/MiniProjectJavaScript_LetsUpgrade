var quotes=['"Success is not final, failure is not fatal: it is the courage to continue that counts."',
            '"Life is never easy. There is work to be done and obligations to be met – obligations to truth, to justice, and to liberty."',
            '"Life is like riding a bicycle. To keep your balance, you must keep moving."',
            '"When we do the best we can, we never know what miracle is wrought in our life or the life of another."',
            '"Life is about making an impact, not making an income."',
            '"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us."',
            '"Great minds discuss ideas; average minds discuss events; small minds discuss people."',
            '"Those who dare to fail miserably can achieve greatly."',
            '"I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time."',
            '"Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world."',
            '"Challenges are what make life interesting and overcoming them is what makes life meaningful."'];
function newQuote(){
    var random=Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay').innerHTML=quotes[random];
}