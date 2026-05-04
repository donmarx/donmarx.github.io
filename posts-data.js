const DEFAULT_POSTS = [
  {
    "id": "vectorama-devlog-1",
    "title": "Devlog #1: Modernizing a game.",
    "excerpt": "Vectorama is a game that was played in a more simple time, this was my thought process of paiting this old classic in new colors.",
    "date": "30/03/2026",
    "tags": [
      "vectorama",
      "design"
    ],
    "published": true,
    "body": "Vectorama is the name of the game my father was taught by the workers while interning at an oil platform, and it became a family classic. From my dad to my uncles and to their friends, they all competitively played vectorama in a pre-video game era.\n\nMy dad has always been a fan of Formula 1 and when I started watching he jumped on the idea of teaching me vectorama and in the week between Christmas and new year 2024 it was all we would play!\n\nBut alas, the holidays would end but I thought that as a gift to my father I would make an online version of Vectorama so we could play from a distance. and one thing led to another and pretty fast I had the base game working online but it begged the question... What now?\n\nI wanted more, a turn-based racing game is something I haven't seen yet in the gaming industry and had genuine potential, but there is one problem that I had to face: Staleness.\n\nThe \"base\" (classic) game by design is「STATIC」, that is: If you do the exact same moves you will have the exact same outcome and that's a problem cause the game would get stale fast, where the simple design would have worked as a game in the past for modern audiences it would not cut it. Players that figured out the best path and where and how to move would win 100% of time with not much else that other players can do, and that's a problem cause there is no skill or cleverness about memorizing moves.\n\nSo I saw two potential outcomes:\n\n「Random Track Generation」\nOr\n「A Roguelike Upgrade System」\n\nRandom track generation would make me lose the personal aspect of design and would in turn limit creativeness by making each tracks frankenstein of blocks that by design must link to other blocks.\n\nSo upgrade system it is.\n\nEach new upgrade added to the pool adds a new combination that is possible and by limiting the amount of upgrade slots, players are forced to get creative and to find synergies that work the best. I can't wait to see what builds and strategies players create to get the best times on each track!\n\nThis new feature also injects into this old classic a fundamental part of game design:「Risk and Reward」\nWhere the original vectorama is designed around risk and reward by allowing players to build more speed knowing that they risk not having enough time to brake, crazy upgrades and mechanics turn that up to 11!\n\nI'm glad to say that the direction that vectorama is headed is loyal to the pen and paper game while also taking full advantage of the creativity and out of the box thinking that a medium like video-game allows for,\nNow I just got to make all these upgrades..."
  },
  {
    "id": "fighter-devlog-1",
    "title": "Devlog #2: Fighting Games - Schmovement First, Everything Else Second",
    "excerpt": "I spent the first two months only working on the game movement. No art, no UI, no combat even. Here's why that was the right call.",
    "date": "31/03/2026",
    "tags": [
      "fighter",
      "design"
    ],
    "published": true,
    "body": "This is my second game project that I'm working on concurrently with Vectorama, while that is my main project this will be a small study as to what makes fighting games fun, deep and engaging while also offering a perspective shift.\n\nNow before we throw the first punch, there is something which is arguably even more important: 「The Movement」.\n\nSince this is a top down game we don't have the option of aerial movement. You would think that this would be limiting but I find the challenge even more exciting. When I think about my favorite fighting games, the neutral is heavily movement based, instead of constant shield pressure... There is an inherent risk and reward to the idea of trying to bait out your oponent with good movement, the more unsafe you permit to be yourself the more probable is that the oponent will try and hit you. \n\nBut then what choices do you have?\n\nFootsies, Koreanbackdash, Wavedashing, Dash dancing (remember this one) are just a few of the movement options that allow you to fight without even throwing a single attack.\n\nFighting games will alway be about:\n\nbait and punish,\nreel and kill,\nattract and smack,\n...\n\nYou get it.\n\nSo my idea for this fighting game is to implement the fast paced dash dancing mechanic of the smash bros series where the inicial slice of the run is characterized by a burst of speed, or a \"dash\", followed by a continuous sprint. The what seprates these two is that the dash of the animation allows for you to interrupt the movement to initiate a dash in another direction, where the sprint locks you into a skid and turn around animation for a couple of frames, leaving you open to attacks. So ideally you are dashing in and out trying to bait an attack from your enemy, or as it is called: 「Dash Dancing」\n\nImplementing a satisfying movement mechanic is proving itself tough but its also very rewarding to be able to design a system so precise that I'm tweaking fractions of frames!"
  },
  {
    "id": "devlog-2-leaning-to-implement-a-bajillion-upgrades",
    "title": "Devlog #2: Leaning to Implement a Bajillion Upgrades",
    "excerpt": "From simple to complex. A game can be as fun and as plain as the content you put in it. Anything is possible in video-games you just have to deal with the headache to implement that.",
    "date": "Coming Soon",
    "tags": [
      "vectorama",
      "design"
    ],
    "published": false
  },
  {
    "id": "devlog-1-why-a-fighting-game",
    "title": "Devlog #1: Why a Fighting game?",
    "excerpt": "My thought process on formulating my idea for a fighting game, from conception to where its sits.",
    "date": "31/03/2026",
    "tags": [
      "fighter",
      "design"
    ],
    "published": true,
    "body": "Where I picked Godot to bring Vectorama to life, I came to the conclusion that learning a new engine would open doors which will take me closer to my goals: \n\nSo Unity it is.\n\nNow all I need is an idea for a game which is fun and pretty beginner friendly to create, and my mind went directly to a top down oldschool Zelda-esque game, since for some reason most of the game dev tutorials on youtube all teach you how to make a game in this format. \n\nBut...\n\nZelda has already been made a bunch of times and I don't really want to get bogged down on all the writing and world building that would be required to make a game in that same format enjoyable. I need then to figure out how to make a top down adventure game all about the gameplay.\n\nThe way I went about tackling that challenge is thinking of something that hasnt really been done in that format:「PVP」. The combat in old zelda games just wouldnt fly in today's gaming industry, the plain walk and slash limits the ammount of depth and strategy to be integrated in the system. \n\nI did some research and found an old mmo called \"GraalOnline Classic\" which the gameplay is almost beat-for-beat that of \"The Legend Of Zelda: A Link Between Worlds\" and yeah... I was spot on: the pvp is really clunky.\n\nSo the challenge is set: how to breathe new life into a gmae made for players and systems 35 years ago?\n\n...\n\nEasy, make it Smash Bros!"
  },
  {
    "id": "gamescom-game-spotlight-tupi-the-legend-of-arariboia",
    "title": "Gamescom Game Spotlight: \"Tupi: The Legend of Arariboia\"",
    "excerpt": "\"Tupi: The Legend of Arariboia\" is a turn based positional roguelike that holds its brazilian heritage very close to its heart, but is it any good?",
    "date": "03/05/2026",
    "tags": [
      "review",
      "events"
    ],
    "published": true,
    "body": "This week I went to Gamescom Latam and my first stop was an unasuming booth where I had the pleasure of meeting up with the devs of \"Tupi\", a brazilian folclore inspired positional turn based rpg where you have a main character core in \"Arariboia\" and then a very interesting pokemon-esque capture system where you get to recruit diferent brazilian folclore spirits to your party.\n\nAnd let me tell you, the spirits are definitely the game's highlight. I didn't have the time to see all of them but for the ones who I did see were all really cool and creative designs all with their quirks and wearing their personality on their skin or shadow or branches or ...  (you get it). And that is a very smart way to trick the player into wanting to recruit these monster without having to outright force you to just for the sake of getting stronger, you WANT the cool looking moster just cause it looks awesome and if it performs awesome as well... well thats just a killer formula for a game.\n\nBut.\n\nIn the demo I played I went to an 「ELITE BATTLE」tile, and sadly I was dissapoint. \n\nSeems like the game balancing still isnt there, in a game like this I feel like I want a little bit of extremism. The fight took way too long but it just wasn't hard, I could easily heal the attacks that the miniboss was doing and vice versa. So even though the fight took something like 10 minutes I came out of it basically full health still. \n\nBut still it does seem to have a solid base and really amazing art direction, with this very dedicated team I am excited to see the direction that the game will take!"
  },
  {
    "id": "gamescom-studio-spotlight-venn-studios",
    "title": "Gamescom Studio Spotlight: Venn Studios",
    "excerpt": "The upcoming brazilian indy game studio Venn Studio showcased three of the games they're working on, do we have a new all time classic studio coming with rockets to this competitive environment?",
    "date": "03/05/2026",
    "tags": [
      "ideas",
      "review",
      "thoughts",
      "events"
    ],
    "published": true,
    "body": "Venn Studios is a Brazilian games studio looking to create transmedia franchises, and wow, that is a loaded promise, but could they live up to it?\n\nUpon arriving at their booth, I was very kindly received and offered the chance to play their three games. My eyes were drawn (obviously) to their Retro Dark Fantasy Soulslike: 「Dark Island: Faded Memories」.\n\nDark Island: Faded Memories Review:\n\nTalking to the dev and playing the game, it's clear that the dev had a vision to take on the \"Bloodborne demake\" and iterate on it to make it his own. The game features PS1-era graphics with a modern view on action RPGs, but as the dev stated, an emphasis on 「multiplayer」.\n\nThe game features a very chaotic \"open hurtbox\" where all attacks damage all entities, hostile or friendly. I wished the demo had the co-op multiplayer so that we could get a feel for it, and I really hope that the dev truly takes advantage of the mostly unique open hurtbox mechanic to make interesting level designs where you are incentivized to use clever positioning and planning to use your enemies to your advantage.\n\nRight now, where it sits, it has a subpar soulslike combat feel, a very interesting art direction, a tacked-on dragon flight mode that didn't really add to the experience (give me cool shit to fly through and under, please), and an innovation that doesn't really get to shine.\n\nAfter that, I got to play their flagship game 「Rogue Reigns」 — set to release in September of this year — and I'm a little worried.\n\nRogue Reigns Review:\n\nFrom the short demo, you can see that it's a roguelike deckbuilder very akin to Slay the Spire, but with a party mechanic. I really liked the art, and the fact that it's made in their own in-house engine is truly astounding, but I wish they had really taken this freedom and run with it: crazy camera angles, animations, and effects would really make the combat pop and take their game a whole new step forward.\n\nAll the characters that were showcased had very interesting and fun designs, but the rogue character had an interesting and really clever sleeve mechanic where it could hide cards up its sleeve to keep them between turns.\nAll of this showed me the potential that this game has to become a benchmark of quality and creativity in the sort of saturated market of roguelike deckbuilders, but as it stands right now, I felt a little blue-balled when playing it.\n\nAnd finally, last but definitely not least.\n\nParadoxical Review:\n\nWhat a game. It's so clever, so eloquent. So simple yet so clever.\n\nWhen talking to the dev, you can see that it's really a passion project of his, and like all the greatest games, the idea for Paradoxical came from a place of love and curiosity. The question that Gustavo (the dev) set out to answer was: 「What if we could move portals?」\n\nAnd hey, the madman did it. \n\nIn Portal, you could never move portals — only shoot them at stationary objects — but Paradoxical took that simple constraint and made it its main mechanic. Moving portals through pillars to make platforms elsewhere, and shooting portals through one another, are only two of what I'm sure are many more creative and innovative ways that Gustavo seeks to iterate and push the mechanic to the edge. There is also a robot companion that you need to chauffeur around to power doors and portals to the next level, and he is just super charismatic and really adds to the experience.\n\nLook out for this game, because just from playing the demo I felt like I was playing the next big thing. Please, Venn, give my boy all the support he needs, and I'm sure that when it releases, Paradoxical will put you all on the map big time.\n\nIn short, I had a lovely time at Venn's stand, and the amount they love games is honestly moving, and I'm sure that we will be seeing more from the talented folks over there."
  }
]