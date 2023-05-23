/*
// const CARDS = [
//     'Airplane Mode',    'Attention Seeker',      'Baby Got Back',
//     'Birthday Suit',    'Boat Race',             'Bust a Rhyme',
//     'Categories',       'Censored Content',      'Chicken Choker',
//     'Choose A Victim',  "Chug O'clock",          'Dead Battery',
//     'Dirty Bomb',       'Drip King',             'Drunkest Player',
//     'Dumbo',            'Everyone Drink',        'Friends',
//     'Guess the Animal', 'Happy Birthday',        'Hot Seat',
//     'Kama Sutra',       'Last Hook Up',          'Most Likely To',
//     'Most Whipped',     'Mystery Shot',          'Neighbours Drink',
//     'Oldest Drinks',    'Patchy Beard',          'Protection',
//     'Radio Check',      'Rock, Paper, Scissors', 'Shag Marry Kill',
//     'Shortest Player',  'Shotgun',               'Single Pringle',
//     'Sink The Ship',    'Slowest Drinker',       'Sobriety Test',
//     'Soul Mates',       'Spelling Bee',          'Tactical Chunder',
//     'Tallest Player',   'Text Alert',            'This is not a funeral',
//     'Top Shagger',      'Tramp Stamp',           'Waterfall',
//     'Worst Driver',     "You're Fired",          'Youngest Drinks'
//     ];

// const QUANTITIES = [1,1,1,1,1,3,3,1,1,2,4,1,1,1,1,1,2,1,1,1,2,1,1,2,1,2,1,1,1,2,2,2,2,1,1,1,2,2,1,1,2,1,1,1,1,1,1,2,1,1,1];
*/
//Each entry in cardsArray contains [card name, quantity in deck, card image/icon, rule description]
const cardsArray = [
    ['Airplane Mode', 1, "🛫", "Put down your phone and pick up your drink. Anyone on their phone right now must drink 5 sips."],
    ['Attention Seeker', 1, "🦚", "Posted on social media today? No one cares. Drink 2 sips."],
    ['Baby Got Back', 1, "🍑", "Drink 2 sips if you have the biggest butt. And remember, you cannot lie."],
    ['Birthday Suit', 1, "👮‍♂️", "If you're showing the most skin, drink 3 sips. The alcohol blanket will help keep you warm but it won't cover up your life choices."],
    ['Boat Race', 1, "🛶", "Two teams, one referee and a race to the finish. Players line up in teams either side of the table. When the referee starts, the first drinker on each team begins drinking. Once they've finished their drink the second player starts and so on. The winning team gives out one shot to any other player."],
    ['Bust a Rhyme', 3, "🎙", "One at a time, make it rhyme. If you hesitate or repeat, take 4 sips and accept your defeat."],
    ['Categories', 3, "💭", "The player who draws this card must choose a category. Around the room each player must name something that falls into the category chosen. Hesitate whilst thinking? time to get drinking. Take 5 sips."],
    ['Censored Content', 1, "🙈", "Flash or shot. Your choice. Your Reputation."],
    ['Chicken Choker', 1, "🐔", "Take 3 sips if you've masturbated today. Now wash your hands you dirty pig."],
    ['Choose A Victim', 2, "☠", "Give a shot to a person of your choice."],
    ["Chug O'clock", 4, "🍺", "Chug your drink as the other players count down from 5. No pauses. No excuses."],
    ['Dead Battery', 1, "📴", "Player with the lowest battery percentage, stop swiping right on tinder and drink 2 sips."],
    ['Dirty Bomb', 1, "💣", "Last person to take a shit, take a shot."],
    ['Drip King', 1, "💎", "Player with the most expensive outfit, congratulations, give out 5 sips. You may never be able to afford a mortgage but at least you think you look good."],
    ['Drunkest Player', 1, "🥴", "You can do better. Take 5 sips and move to the seat closest to the toilet."],
    ['Dumbo', 1, "👂", "Cheers big ears. Drink 3 sips if you have the biggest ears."],
    ['Everyone Drink', 2, "🍾", "Everyone with a drink, take 3 sips. Everyone without one, why are you here?"],
    ['Friends', 1, "🌆", "Having no friends has finally paid off. Take a sip for each player there is in the room."],
    ['Guess the Animal', 1, "💁‍♀️", "Ya filthy animal. You have one minute to act out as many animals as you can to the player on your left without making a sound. For every correct guess, give out 2 sips. For every incorrect guess, you both drink 3."],
    ['Happy Birthday', 1, "🎂", "Happy Birthday! If you were the most recent person to celebrate your birthday, give out 5 sips."],
    ['Hot Seat', 2, "🥵", "You're in the hot seat. Other players, you can ask one question and one question only. So make it count!"],
    ['Kama Sutra', 1, "🧘‍♀️", "Time to get your kink on. The group must choose you a partner. You have 30 seconds to make as many s*x positions as possible. For every position made, give out 1 sip."],
    ['Last Hook Up', 1, "💏", "You little minx. Choose a potential suitor and both take 3 sips"],
    ['Most Likely To', 2, "👉", "Players must judge the culprit around the room who is 'most likely to...?' You get 3 questions so choose wisely. The person with the most players pointing at them must take a sip. There are no winners, only losers and a whole lot of judgement."],
    ['Most Whipped', 1, "🤠", "So your partner finally let you go out, only to get abused by a card game. Boo hoo. Drink 4 sips whilst you think about what excuse you'll use to leave early tonight."],
    ['Mystery Shot', 2, "🥃", "You must take a shot that the other players make for you. Get creative. Did someone say tabasco?"],
    ['Neighbours Drink', 1, "🥂", "Howdy neighbor. Diddly drink 3 sips if you're on the right or left of the player. "],
    ['Oldest Drinks', 1, "🧓", "Back in my day we didn't need card games to drink.Take 2 sips."],
    ['Patchy Beard', 1, "👨", "Boys, if your beard doesn't connect, time to get wrecked. Take a shot."],
    ['Protection', 2, "🛡", "Use this card to protect yourself when needed. You can only use it once so use it wisely. (Disclaimer: does not protect against STIs)"],
    ['Radio Check', 2, "👨🏻‍🎤", "Ready to piss off the neighbours? The player who draws this card must begin by singing a popular song. The last person to join in with the lyrics drinks 5 sips. If no-one joins in it's time to call the uber and take your tone-deaf ass home because that was embarrassing."],
    ['Rock, Paper, Scissors', 2, "✊", "You know the drill. Choose the person who's easiest to read as your competitor. All other players pick a side. Losing team drinks 4 sips."],
    ['Shag Marry Kill', 2, "😈", "From around the room pick 3 people you'd either shag, marry, or kill. Hit it and Quit it? Give 2 sips. Bringing home to the family? Give 3 sips. Straight up murder? Give 5 sips."],
    ['Shortest Player', 1, "🤏", "You lucky Leprechaun. Life's hard enough, give out 10 sips."],
    ['Shotgun', 1, "🔑", "Ready to channel your inner frat boy? Choose a worthy competitor and both take a can of your choice. Other players count down from 10. The first player to shotgun their can gives out 10 sips."],
    ['Single Pringle', 1, "💔", "Single players, take 3 sips. It will help with the loneliness."],
    ['Sink The Ship', 2, "🚢", "The rules are simple. You sink it, you drink it. Start by floating a shot glass in the centre of a drink of your choice. Players take turns pouring their own drink into the shot glass. If you sink the shot, you down the drink."],
    ['Slowest Drinker', 2, "🥤", "Player with the fullest cup, drink until you've matched the player with the emptiest cup."],
    ['Sobriety Test', 1, "🚔", "Time for you to take a sobriety test. Say the below: I'm not the fig plucker, Nor the fig pluckers' son, But I'll pluck figs Till the fig plucker comes. Fail and you drink. Succeed and everyone else drinks."],
    ['Soul Mates', 1, "💞", "You're a bad influence. Pick a soul mate. Anytime you drink, they drink too."],
    ['Spelling Bee', 2, "🐝", "The player who draws this card must pick another player to spell a word. If they spell it wrong they drink, but if they get it right, you drink."],
    ['Tactical Chunder', 1, "🤮", "Drink 3 sips if you've ever thrown up at a party and carried on. Everyone loves a trooper. If you've done this tonight and you're willing to admit it, give out 10 sips."],
    ['Tallest Player', 1, "🦒", "If you're tall enough to slam dunk, let's get your lanky ass drunk. Take 5 sips."],
    ['Text Alert', 1, "📳", "Everyone must put their phones in the middle, silent mode off. First one to get a message downs their drink."],
    ['This is not a funeral', 1, "⚰", "Drink 2 sips if you're wearing black."],
    ['Top Shagger', 1, "💦", "Player with the highest body count, take 5 sips and get to the clinic."],
    ['Tramp Stamp', 1, "🦋", "Take a drink for every bit of ink. Double up if you won't show your tattoo to the room."],
    ['Waterfall', 2, "💧", "To get that waterfall flowing, every player starts drinking at the same time as the person to their left, starting with the player who drew the card. No player can stop drinking until the player before them stops."],
    ['Worst Driver', 1, "🚘", "Take 3 sips. You are not the designated driver."],
    ["You're Fired", 1, "👋", "Hopefully you can hold your drink better than you can hold down a job. Drink if you've ever been fired."],
    ['Youngest Drinks', 1, "🍼", "Don't be a cry baby and drink 2 sips. If your mum still does your laundry have 3 sips as well, you're just as bad."]
];

export default class Deck {
    constructor(cards = buildDeck()) {
        this.cards = cards;
    }

    get numberOfCards() {
        return this.cards.length;
    }

    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }

    discard() {
        return this.cards.shift()
    }
}

class Card {
    constructor(name, image) {
        this.name = name
        this.image = image
    }
    
    getHTML() {
        document.getElementById("cardName").innerHTML = this.name
        document.getElementById("cardImg").innerHTML = this.image
    }
}

function buildDeck() {
    let arr = [];
    cardsArray.forEach(entry => {
        let cardName = entry[0]
        let cardQuantity = entry[1]
        let cardImage = entry[2]
        for (let i = 0; i < cardQuantity; i++) { //
            arr.push(new Card(cardName, cardImage))
        }
    })
    return arr
  }