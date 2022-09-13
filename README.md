# millenial-nerdist-caesar-cipher

Hello and welcome to my project!

The objective of this web page is to practice "everything" I have learned in HTML, CSS and JavaScript so far. The idea for the theme of the page and the JavaScript algorithm actually comes from a challenge proposed in an web course that I'm studying. The exercise explains briefly what a Caesar cipher is and asks the student to create a website page that presents 10 movies - with the catch being that half of them shall have their titles ciphered in the source code but presented to the viewer normally.

The page that I created is a cliché Top 10 blog type-like page from a website called "Millenial Nerdist". The page has everything that a standard web page should have: a <nav>, a <header>, a <aside>, a <footer>, some <section>, some images, a lot of links, etc. I don't want to tease, but since this is a standalone page, the links in it don't actually lead to other pages from Millenial Nerdist, and instead lead to something ...comical.
  
Beside each movie poster lies its title, and if you righ-click with your mouse and select Inspect the source code will be shown, and in it you'll see that the title is ciphered. With JavaScript, I created a function called caesar_shift that receives a string and a number of alphabet letters forward or backwards (negative integer) as parameters and returns the string converted. Then, I use document.getElementsByClassName to access all ciphered movie titles in the HTML, convert them with caesar_shift and return them "translated" to the HTML page with .innerHTML.

Somethings are still very clumsy and unfinished and I have not studied responsive web design yet - but I plan to start doing so in the near future, and hopefully I can keep updating and improving this little project with every new thing that I learn. If there is any feedback or advice that you would like to give me or if you feel that there's anything that I should have explained more clearly or more in detail, please let me know!
