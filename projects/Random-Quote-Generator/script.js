var quotes = ['\"People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you\’re lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life.\”— Carrie Ann Moss',

    '\“Some women choose to follow men, and some choose to follow their dreams. If you\’re wondering which way to go, remember that your career will never wake up and tell you that it doesn\’t love you anymore.\” — Lady Gaga',

    '\“Life is what happens to us while we are making other plans.\”― Allen Saunders',

    '“Life isn\’t about finding yourself. Life is about creating yourself.\”― George Bernard Shaw',

    '\“You are the sum total of everything you\’ve ever seen, heard, eaten, smelled, been told, forgot ― it\’s all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive.\” ― Maya Angelou',

    '\“Doubt kills more dreams than failure ever will.\” - Suzy Kassem',

    '\“Keep your face always toward the sunshine, and shadows will fall behind you.\” – Walt Whitman',

    '\“Whether you think you can or think you can\’t, you\’re right.\” – Henry Ford',

    '\“Your talent determines what you can do. Your motivation determines how much you\’re willing to do. Your attitude determines how well you do it.\” —Lou Holtz',

    '\“The happiness of your life depends on the quality of your thoughts.\” – Marcus Aurelius',

    '\“You are who you are meant to be. Dance as if no one\’s watching. Love as if it\’s all you know. Dream as if you\’ll live forever. Live as if you\’ll die today.\” James Dean',

    '\“You do not find the happy life. You make it.”— Camilla Eyring Kimball',

    '\“You\’ve gotta dance like there\’s nobody watching, Love like you\’ll never be hurt, Sing like there\’s nobody listening, And live like it\’s heaven on earth.\”― William W. Purkey',

    '\“Happiness is not something readymade. It comes from your own actions.”-Dalai Lama',

    '\“Folks are usually about as happy as they make up their minds to be.\” – Abraham Lincoln',

    '\“It is during our darkest moments that we must focus to see the light.\” — Aristotle',

    '\“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.\” -Dale Carnegie',

    '\“You learn more from failure than from success. Don\’t let it stop you. Failure builds character.\” — Unknown',

    '\“Fairytales do not tell children that dragons exist. Children already know that dragons exist. Fairytales tell children that dragons can be killed.\” – G K Chesterton',

    '\“The bad news is time flies. The good news is you\’re the pilot.\” – Michael Altshuler',

    '\“Just because it\’s what\’s done doesn\’t mean it\’s what should be done!\”- Cinderella',

    '\“With a smile and a song, life is just like a bright sunny day. Your cares fade away.\” – Snow White',

    '\“It\’s no use going back to yesterday because I was a different person then.\” – Alice, Alice In Wonderland',

    '\“When we get to the end of the story, you will know more than you do now…\” – Hans Christian Andersen, The Snow Queen',

    '\“The most important thing in life is to stop saying \‘I wish\’ and start saying \‘I will\’. Consider nothing impossible then treat possibilities as probabilities.\” -Charles Dickens',

    '\“Learn as if you will live forever, live like you will die tomorrow.\” — Mahatma Gandhi',

    '\“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest./" —Walter Anderson',

    '\“All our dreams can come true if we have the courage to pursue them.\”- Walt Disney',

    '\“Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new.\”- Brian Tracy',

    '\“Everything you\’ve ever wanted is on the other side of fear.\”- George Addair',

    '\“Never bend your head. Always hold it high. Look the world straight in the eye.\”– Helen Keller',

    '\“We generate fears while we sit. We overcome them by action. Fear is nature\’s way of warning us to get busy.\” –  Dr. Henry Link',

    '\“The man who has confidence in himself gains the confidence of others.\” – Hasidic Proverb',

    '\“What you lack in talent can be made up with desire, hustle and giving 110% all the time.\” – Don Zimmer',
    
    '\“Fake it until you make it! Act as if you had all the confidence you require until it becomes your reality.\” – Brian Tracy']


function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}