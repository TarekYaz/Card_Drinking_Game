// const cards = ["Shotgun", "Bust a Rhyme", "Bust a Rhyme", "Bust a Rhyme", "Sink The Ship", "Sink The Ship", "Boat Race", "Categories", "Categories", "Categories", "Waterfall", "Waterfall", "Kama Sutra", "Radio Check", "Radio Check", "Shag Marry Kill", "Shag Marry Kill", "Spelling Bee", "Spelling Bee", "Most Likely To", "Most Likely To", "Rock, Paper, Scissors", "Rock, Paper, Scissors", "Guess the Animal", "Text Alert", "Chug O'clock", "Chug O'clock", "Chug O'clock", "Chug O'clock", "Protection", "Protection", "Most Whipped", "Top Shagger", "Slowest Drinker", "Slowest Drinker", "Patchy Beard", "Mystery Shot", "Mystery Shot", "Hot Seat", "Hot Seat", "Drunkest Player", "Soul Mates", "Choose A Victim", "Choose A Victim", "Sobriety Test", "Dead Battery", "Dumbo", "Chicken Choker", "Everyone Drink", "Everyone Drink", "Tactical Chunder", "Last Hook Up", "Tallest Player", "Happy Birthday", "Attention Seeker", "Birthday Suit", "Baby Got Back", "Hot Seat", "Drip King", "Censored Content", "Neighbours Drink", "This is not a funeral", "You're Fired", "Oldest Drinks", "Tramp Stamp", "Airplane Mode", "Protection", "Youngest Drinks", "Dirty Bomb", "Friends", "Single Pringle", "Worst Driver", "Shortest Player"];
// cards.sort();
// console.log(cards);

const imageMap = new Map([
    ['Airplane Mode', 'https://images.pexels.com/photos/442419/phone-plane-airplane-4g-442419.jpeg'],
    ['Attention Seeker', 'https://images.pexels.com/photos/927505/pexels-photo-927505.jpeg'],
    ['Baby Got Back', 'https://images.pexels.com/photos/5750472/pexels-photo-5750472.jpeg'],
    ['Birthday Suit', 'https://images.pexels.com/photos/2090897/pexels-photo-2090897.jpeg'],
    ['Boat Race', 'https://images.unsplash.com/photo-1576343547411-5f7ef0601c71'],
    ['Bust a Rhyme', 'https://img.freepik.com/free-vector/isolated-illustration_1284-50121.jpg'],
    ['Categories', 'https://img.freepik.com/free-vector/question-mark-template-with-text-space-design_1017-27391.jpg'],
    ['Censored Content', 'https://img.freepik.com/free-vector/children-laptop-with-adult-content-restriction-inappropriate-video-adult-content-sexual-content-notification-18-age-restriction-concept_335657-2134.jpg'],
    ['Chicken Choker', 'https://img.freepik.com/free-photo/rooster_1385-497.jpg'],
    ['Choose A Victim', 'https://img.freepik.com/free-photo/sarcastic-cute-curly-haired-armenian-girl-hold-index-finger-camera-like-showing-teardrop-acting-upset-feel-regret-sadness-standing-bothered-bad-thoughts-whining-complaining-unlucky-life_176420-35024.jpg'],
    ["Chug O'clock", 'https://img.freepik.com/free-photo/hand-man-holding-vintage-clock_1368-8453.jpg'],
    ['Dead Battery', 'https://images.unsplash.com/photo-1536692192939-f1547f1cde39'],
    ['Dirty Bomb', 'https://img.freepik.com/free-photo/bomb_1048-5344.jpg'],
    ['Drip King', 'https://img.freepik.com/free-photo/fashionable-pale-brunette-long-green-dress-black-jacket-sunglasses-standing-street-during-daytime-against-wall-light-city-building_197531-24468.jpg'],
    ['Drunkest Player', 'https://images.pexels.com/photos/209620/pexels-photo-209620.jpeg?output=compress'],
    ['Dumbo', 'https://farm9.staticflickr.com/8144/7486755002_67304f164b.jpg'],
    ['Everyone Drink', 'https://img.freepik.com/free-photo/group-friends-enjoying-evening-drinks-with-beer-wooden-table_155003-14438.jpg?output=compress'],
    ['Friends', 'https://www.thewordfinder.com/friends-font-generator/image.php?action=generate-image&logo_text=DRINK&bg_color=%23000000&text_color=%23ffffff&dots=1&dots_color_1=%23cb150e&dots_color_2=%230000ff&dots_color_3=%23fdc938&dots_color_4=%23cb150e&c=1667826276'],
    ['Guess the Animal', 'https://archives.bulbagarden.net/media/upload/e/e8/Whos_That_Pokemon.png?output=compress'],
    ['Happy Birthday', 'https://img.freepik.com/free-photo/purple-burning-candles-decorative-muffins-with-colorful-star-sprinkles-against-blue-backdrop_23-2148190494.jpg?output=compress'],
    ['Hot Seat', 'https://live.staticflickr.com/3249/2373453050_9edd062baa.jpg?output=compress'],
    ['Kama Sutra', 'https://static.simpsonswiki.com/images/d/d5/Kama_Sutra_Oh_Brother%2C_Where_Bart_Thou.png?output=compress'],
    ['Last Hook Up', 'https://64.media.tumblr.com/676f113291c757d0db54af0344d00610/tumblr_p21y6v1iuG1vze7z4o4_640.gifv'],
    ['Most Likely To', 'https://images.pexels.com/photos/652355/pexels-photo-652355.jpeg?output=compress'],
    ['Most Whipped', 'https://img.freepik.com/free-photo/man-woman-portrait-smiling-each-other-sofa_158595-5849.jpg?output=compress'],
    ['Mystery Shot', 'https://img.freepik.com/free-photo/burning-tequila-shot-glass-dark-background_23-2147904963.jpg?output=compress'],
    ['Neighbours Drink', 'https://images.unsplash.com/photo-1474649107449-ea4f014b7e9f?output=compress'],
    ['Oldest Drinks', 'https://img.freepik.com/free-photo/closeup-support-hands_53876-14962.jpg?output=compress'],
    ['Patchy Beard', 'https://img.freepik.com/free-photo/cheerful-bearded-man-keeps-fingers-crossed-smiles-broadly-closes-eyes_273609-8943.jpg?output=compress'],
    ['Protection', 'https://img.freepik.com/free-photo/abstract-sexual-health-composition-with-condom_23-2149101513.jpg?output=compress'],
    ['Radio Check', 'https://img.freepik.com/free-photo/microphone-acoustic-isolation-foam_23-2148695273.jpg?output=compress'],
    ['Rock, Paper, Scissors', 'https://upload.wikimedia.org/wikipedia/commons/6/67/Rock-paper-scissors.svg'],
    ['Shag Marry Kill', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/4339409c-6983-4206-b8fd-20cb80a47b8f/d1yaghh-ceb85dc5-15a7-4b77-a55c-53dac9416aef.jpg'],
    ['Shortest Player', 'https://static.simpsonswiki.com/images/3/3f/Leprechaun.png?output=compress'],
    ['Shotgun', 'https://cdn-icons-png.flaticon.com/512/1206/1206314.png?output=compress'],
    ['Single Pringle', 'https://img.freepik.com/free-photo/pleased-caucasian-man-hugs-himself-has-high-self-esteem-tilts-head-has-toothy-smile-wears-casual-yellow-hat-t-shirt_273609-26046.jpg?output=compress'],
    ['Sink The Ship', 'https://img.freepik.com/free-vector/broken-junk-ship-sinking-sea_1308-90868.jpg?output=compress'],
    ['Slowest Drinker', 'https://img.freepik.com/free-photo/closeup-two-toed-sloth-hanging-from-rope-surrounded-by-greenery-zoo_181624-15988.jpg?output=compress'],
    ['Sobriety Test', 'https://img.freepik.com/free-vector/drunk-pig-drinking-beer_1308-108618.jpg?output=compress'],
    ['Soul Mates', 'https://img.freepik.com/free-photo/relationship-lovely-couple-cafe_144627-40298.jpg?output=compress'],
    ['Spelling Bee', 'https://img.freepik.com/free-vector/isolated-bee-white-background_1308-55007.jpg?output=compress'],
    ['Tactical Chunder', 'https://cdn-icons-png.flaticon.com/512/493/493467.png'],
    ['Tallest Player', 'https://img.freepik.com/free-vector/cute-giraffe-flat-style_1308-114113.jpg'],
    ['Text Alert', 'https://img.freepik.com/free-vector/human-hand-holding-mobile-phone-with-text-messages_74855-6531.jpg'],
    ['This is not a funeral', 'https://img.freepik.com/free-vector/hand-drawn-halloween-headstone-doodle_17005-1702.jpg'],
    ['Top Shagger', 'https://img.freepik.com/free-photo/horizontal-shot-feet-couple-white-bedclothes-bed-bedroom_176532-7942.jpg'],
    ['Tramp Stamp', 'https://img.freepik.com/free-vector/vector-illustration-sketch-tattoo-art-butterfly-abstract-style-mystical-astrological-symbol_1441-437.jpg'],
    ['Waterfall', 'https://live.staticflickr.com/8475/8110986403_8c07985947_z.jpg'],
    ['Worst Driver', 'https://img.freepik.com/free-vector/black-car-keys-background_1212-852.jpg'],
    ["You're Fired", 'https://img.freepik.com/free-photo/front-view-sad-man-work_23-2149445773.jpg'],
    ['Youngest Drinks', 'https://img.freepik.com/free-psd/baby-milk-bottle-mockup_439185-3166.jpg']
]);

let cards = [
    'Airplane Mode', 'Attention Seeker', 'Baby Got Back',
    'Birthday Suit', 'Boat Race', 'Bust a Rhyme',
    'Bust a Rhyme', 'Bust a Rhyme', 'Categories',
    'Categories', 'Categories', 'Censored Content',
    'Chicken Choker', 'Choose A Victim', 'Choose A Victim',
    "Chug O'clock", "Chug O'clock", "Chug O'clock",
    "Chug O'clock", 'Dead Battery', 'Dirty Bomb',
    'Drip King', 'Drunkest Player', 'Dumbo',
    'Everyone Drink', 'Everyone Drink', 'Friends',
    'Guess the Animal', 'Happy Birthday', 'Hot Seat',
    'Hot Seat', 'Kama Sutra', 'Last Hook Up',
    'Most Likely To', 'Most Likely To', 'Most Whipped',
    'Mystery Shot', 'Mystery Shot', 'Neighbours Drink',
    'Oldest Drinks', 'Patchy Beard', 'Protection',
    'Protection', 'Radio Check', 'Radio Check',
    'Rock, Paper, Scissors', 'Rock, Paper, Scissors', 'Shag Marry Kill',
    'Shag Marry Kill', 'Shortest Player', 'Shotgun',
    'Single Pringle', 'Sink The Ship', 'Sink The Ship',
    'Slowest Drinker', 'Slowest Drinker', 'Sobriety Test',
    'Soul Mates', 'Spelling Bee', 'Spelling Bee',
    'Tactical Chunder', 'Tallest Player', 'Text Alert',
    'This is not a funeral', 'Top Shagger', 'Tramp Stamp',
    'Waterfall', 'Waterfall', 'Worst Driver',
    "You're Fired", 'Youngest Drinks'
];

function drawCard() {
    let noOfCards = cards.length;
    let randNum = Math.floor(Math.random() * (noOfCards - 1));
    // debug randNum
    // let randNum = 32;
    let cardName = cards[randNum];

    console.log(randNum + " " + cardName);
    console.log(noOfCards);

    //clear chugSecs element
    document.getElementById("chugSecs").innerHTML = "";
    //show 3-10 seconds if card is chug o'clock
    if (cardName == "Chug O'clock") {
        showNumberOfSeconds();
    }
    //show the card name
    document.getElementById("cardName").innerHTML = cardName;
    //show image
    document.getElementById("cardImg").setAttribute("src", imageMap.get(cardName));
    //remove from deck
    cards.splice(randNum, 1);
}

function showNumberOfSeconds() {
    let chugSeconds = Math.floor(Math.random() * 8) + 3;

    document.getElementById("chugSecs").innerHTML = chugSeconds;
};

function displayPlayers() {

    let playerCount = window.localStorage.getItem("players");
    let playerDisplay = document.getElementById("players");

    playerDisplay.innerHTML = "";

    for (let i = 1; i <= playerCount; i++) {
        let newElemInline = document.createElement("p");
        newElemInline.innerHTML = window.localStorage.getItem("player" + i);
        playerDisplay.appendChild(newElemInline);
    }
}
