function generate() {
    let quotes = {
        "- C.S. Lewis" : '"I was not born to be free---I was born to adore and obey."',
        "- Jenny Valentine, Broken Soup" : '"Even when youd lost everything you thought there was to lose, somebody came along and gave you something for free."',
        "- Anne Morrow Lindbergh" : '"Him that I love, I wish to be free -- even from me."'
    }

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];

    let quote = quotes[author];

    document.getElementById('author').innerHTML = author;
    document.getElementById('quote').innerHTML = quote;


}