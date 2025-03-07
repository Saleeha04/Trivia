// Function to hide all sections and show only the selected one
function showScreen(screenId) {
    document.querySelectorAll(".home, .password, .trivia-intro, .trivia, .score-page, .wish-page").forEach(div => {
        div.style.display = "none";
    });

    document.getElementById(screenId).style.display = "flex";
}

// Set up visibility rules when the page loads
document.addEventListener("DOMContentLoaded", function () {
    // Hide all screens except the homepage
    showScreen("home");

    // Attach event listener to play button to show the password screen
    document.querySelector(".play-btn").addEventListener("click", function () {
        showScreen("password");
    });
});

document.getElementById("submit-pass").addEventListener("click", function() {
    const passwordField = document.getElementById("passwordInput");
    const password = passwordField.value;

    if (password === "hanako") {
        // Redirect to the next page
        showScreen("trivia-intro"); 
    } else {
        // Clear input field if incorrect
        passwordField.value = "";
    }
});

// Prevent "Enter" from submitting the password
document.getElementById("submit-pass").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
    }
});

document.getElementById("trivia-next").addEventListener("click", function(event) {
    showScreen("trivia");
});

let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;

// Function to start the trivia
function startTrivia() {
    showScreen("trivia"); // Show trivia screen
    loadQuestion();
}

// Function to load a question
function loadQuestion() {
    if (currentQuestionIndex >= triviaQuestions.length) {
        showScore();
        return;
    }

    const questionData = triviaQuestions[currentQuestionIndex];
    document.getElementById("question").innerText = `Question ${currentQuestionIndex + 1}`;
    document.querySelector("#trivia p").innerText = questionData.question;

    const buttons = document.querySelectorAll("#trivia button");
    buttons.forEach((button, index) => {
        button.innerText = `${String.fromCharCode(97 + index)}. ${questionData.options[index]}`;
        button.onclick = () => answerQuestion(index);
    });
}

// Function to handle answer selection
function answerQuestion(selectedIndex) {
    const questionData = triviaQuestions[currentQuestionIndex];

    userAnswers.push({
        question: questionData.question,
        selectedOption: questionData.options[selectedIndex],
        isCorrect: selectedIndex === questionData.answer
    });

    if (selectedIndex === questionData.answer) {
        score++;
    }

    currentQuestionIndex++;
    loadQuestion();
}

// Function to show the score page
function showScore() {
    showScreen("score-page");
    document.getElementById("score").innerText = `${score} / ${triviaQuestions.length}`;
}

function showScore() {
    showScreen("score-page");

    const scoreText = document.getElementById("score");
    const messageText = document.getElementById("score-message");
    const wishText = document.getElementById("wish-message");
    
    scoreText.innerText = `${score} / ${triviaQuestions.length}`;

    let message = "";
    let wish = "";

    if (score < 3) {
        message = "are you kidding me bro? that's literally bottom frag of bottom frag... how can you get less than 3 out of 10 in a quiz? even a blind mofo would hit the target in an archery competition more than you do. outrageous.";
        wish = "the fking audacity?! \nidk bro... have a birthday -_-";
    } else if (score <= 5) {
        message = "disapppointed but not surprised\nhow could you be this bad at this bro? i gotta question our friendship once more because of this shit. no wonder it's only 3 years old";
        wish = "Happy Birthday :)";
    } else if (score <= 8) {
        message = "OOOOOOOOOO\nnot badddd~ :smug:\ni geniunely expected worse if this was your first try, but congrats regardless. You'll still have to work harder to get the best birthday wish tho.\ntake whatever you can for now ig?";
        wish = "Happy Birthday bro!\nMay you have the most wonderful, enjoyable and memorable birthday ever! It isn't anything special but i still put loads of efforts in it, so i hope you enjoy it lots at the very least! and yeah, har saal itni achi wish ni mile gi so ziada shokhe mt hona lol";
    } else {
        message = 
            "Finally, something to be proud of you about! \n" +
            "I bet you didn't get this score on your first try tho, but I appreciate the struggle! \n" +
            "For your gallant efforts, I hope you swiftly shift to the next page to view your birthday wish! \n" +
            "It has been written with love and joy (not really). \n";
    
        wish = 
            "This marks a mere 3.5 years of us getting to know each other! \n" +
            "I'm amazed we hung on together for so long, but I appreciate you tolerating my BS hehe. \n\n" +
            
            "Did you like the wish? x) I (and GPT) put loads of effort into making it a cute game, so I hope you like it lots! \n" +
            "Even if you don't, I hope you pretend to like it loads heh. \n" +
            "You're pretty old now that I think about it, but I won't talk about that since I'm old as well. \n" +
            "No more bullying boomers for being boomers. :( \n\n" +
    
            "I wanted to continue my long-standing tradition of wishing birthdays at the last minute and keeping the recipient on their toes, but I figured that you'd probably already click the link " +
            "way too late to realize it's your birthday wish lmao, so imma send it early instead. \n\n" +
    
            "IDK if you'll read it on time or not now, but whichever it is, I hope it ends up becoming " +
            "the most memorable wish you've received from *at least* me. \n" +
            "Do let me know if someone else won the best wish competition instead tho -_- \n\n" +
    
            "It's been a long while since we've been friends, and although everyone has their ups and downs, " +
            "I have come to the conclusion that our boat has been pretty smooth sailing. " +
            "Little arguments and little getting angry and stuff—it's actually amazing. \n" +
            "Of course, all the credit goes to me since I'm the one who's actively putting in effort " +
            "to ignore your constant bullshit. 😌 \n\n" +
    
            "And well, look at how fast time passes by—you're already almost done with your master's now. \n" +
            "I hope you had a wonderful experience, aside from studying and cramming shit. " +
            "Since studying abroad is an experience... and yeah, I HOPE YOU SUFFER " +
            "YOUR PARENTS' LACK OF FREEDOM EVEN MORE. AHAHAHAHA. \n\n" +
    
            "Last year was really wonderful ngl. I probably haven't ever been more grateful " +
            "to have a person who doesn't pick stupid fights as a friend than this past year. " +
            "It was hell, but having you with me made it several times better (still hell tho).\n" +
    
            "Yeah, maybe you didn't make many or any 'great' friends abroad... but issok, " +
            "you still have me (I did black magic to whoosh them away). \n" +
    
            "Watching K-dramas with you, making you read webtoons, making you listen to SKZ " +
            "(although I'd appreciate it if you cultivated your tastes a bit), " +
            "spoiling stories for you, and ranting about books—everything I did, " +
            "telling you about it made the experience better for me. \n" +
            "It's like whenever I read or watched something amazing, my first instinct would be to hit you up and rant. " +
            "ALTHOUGH YOU TAKE LEGIT LIGHT YEARS TO REPLY. But yeah, you made everything better. \n" +
    
            "To an extent where I could even consider watching more K-dramas with you " +
            "(Twinkling Watermelon and Weak Hero was fun), and I have more good stuff lined up hehe. \n\n" +
    
            "Sad part is... you're pretty stupid. But alas, I don't have much to do about your stupidity, \n" +
            "just gonna feel bad for Uswa lmao (not anymore tho). \n\n" +
    
            "But stupidity aside, you've always been the first person to stand by my side " +
            "and support me in whatever I've done, no matter how mediocre, lame, or boring. " +
            "Whether it was my lame-ass novel, or my rants over a web project, " +
            "you've always been there to support me. \n" +
    
            "You're amazing, really... in more than a single way. \n" +
            "You're cowardly, stupid, and have shit taste, but you still never judge others for no reason. \n" +
            "You're forgiving (although unnecessarily), hardworking, motivated, and slightly delusional as well. \n" +
            "You may have a different set of priorities than others, but that's what makes you *you*. \n" +
    
            "You may be lacking when it comes to taking initiative or being bold, " +
            "but you've tried your best to survive and make friends in an unknown place. \n" +
            "You've done your best to accommodate yourself in a place where you're family-less and have no one to rely on. \n" +
            "You're incredible, and I hope you'll always know that. \n\n" +
    
            "Self-esteem comes and goes. A person who was brave yesterday " +
            "doesn't mean they'll be brave today. People change every day, and surely, within these past years, " +
            "you've changed a lot. Although still stupid, you've equipped yourself for your new environment. " +
            "ALTHOUGH STILL STUPID AND A LOSER IN CATAN, you've proved to be an incredible friend to *at the very least*, me. \n\n" +
    
            "I hope you'll always know that. And that you won't let anyone else tell you otherwise. \n\n" +
    
            "Last year, you said that you wanted to wish me every year... " +
            "I want to wish you for the years to come as well. " +
            "I want to be there for you in your happiest and saddest moments. \n" +
            "I want to be there for you whenever you're angry, sad, excited, down in the dumps, lost, or whatever. \n" +
            "I want to be the best and most amazing friend you'll ever have \n" +
            "(even if that means doing black magic—jkjk). \n\n" +
    
            "I know I have my shortcomings, and THEY ARE NOT LESS LMAO. \n" +
            "But I want to be someone you can always rely on and reach out to first when you need anyone. \n\n" +
    
            "Happy birthday, brother. 🥳🎉\n" +
            "Happy birthday to my best brother, who acts like a f*cking incel of a little brother most of the time " +
            "but is forced to be the older bro because of age constraints. \n" +
            "Happy birthday to my number one supporter. \n" +
            "Happy birthday to the Hanako shit-talker (watch my boi win). \n" +
            "Happy birthday to my earrape-listening buddy, regardless of whether you like it or not. \n" +
            "Happy birthday to my best gossip buddy and my best shit-talking buddy as well (we going to hell together). \n\n" +
    
            "I hope you have an amazing birthday—a birthday of a kind you've never had before. \n" +
            "I hope you're able to achieve great things, and ALL the things you've ever dreamed of achieving in this insignificant lifespan. \n" +
            "I hope you fulfill all things you've ever prayed about—whether it's your career, your marriage, " +
            "taking care of your parents, or religious success. \n\n" +
    
            "I hope you become the happiest person ever, or at least be f*cking grateful " +
            "that you were born in this time, age, and location. " +
            "I HOPE you become the sweetest and kindest person in the future as well, \n" +
            "and that nobody ever takes advantage of your kindness. (Except for me.)\nI hope you have many more wonderful and more amazing birthdays than this one in the future, and that i'd be there to see it as well 💜";
    }
    

    messageText.innerText = message;
    wishText.innerText = wish;
}

document.getElementById("next-to-wish").addEventListener("click", function() {
    showScreen("wish-page");
});

document.getElementById("home-btn").addEventListener("click", function() {
    // Reset input fields
    document.getElementById("passwordInput").value = "";

    // Reset trivia game
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;

    // Reset trivia buttons (remove previous event listeners)
    document.querySelectorAll(".question-btn").forEach(button => {
        button.onclick = null;
    });

    // Go back to home screen
    showScreen("home");
});


// Event listener to start trivia when next button is clicked
document.getElementById("trivia-next").addEventListener("click", startTrivia);
