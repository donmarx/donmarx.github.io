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
  }
]
