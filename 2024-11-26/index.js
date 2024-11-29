const quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", author: "Winston Churchill" },
    { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "You learn more from failure than from success. Don’t let it stop you. Failure builds character.", author: "Unknown" },
    { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
    { text: "People who are crazy enough to think they can change the world, are the ones who do.", author: "Rob Siltanen" },
    { text: "Failure will never overtake me if my determination to succeed is strong enough.", author: "Og Mandino" }
  ];
  
  document.getElementById('newQuoteButton').addEventListener('click', generateQuote);
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    document.getElementById('quote').textContent = randomQuote.text;
    document.getElementById('author').textContent = `- ${randomQuote.author}`;
  }
  