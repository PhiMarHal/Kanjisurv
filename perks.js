// Map of all available perks
const PERKS = {
    // =========================================================================
    // ANIMAL-COLOR PERKS
    // =========================================================================
    "RED_DRAGON": {
        kanji: "赤龍",
        hiragana: "あかりゅう",
        romaji: "akaryuu",
        english: "Red Dragon",
        description: "+2 POW / -1 AGI",
        color: "#ff3333",
        hoverColor: 0xbb2222,
        onAcquire: function () {
            window.modifyStat('damage', 2);
            window.modifyStat('fireRate', -1);
        }
    },
    "BLUE_WHALE": {
        kanji: "青鯨",
        hiragana: "あおくじら",
        romaji: "aokujira",
        english: "Blue Whale",
        description: "Creates a protective shield that absorbs one hit",
        color: "#3498db",
        hoverColor: 0x2980b9,
        onAcquire: function () {
            window.activateShield();
        }
    },
    "TEAL_OCTOPUS": {
        kanji: "青緑蛸",
        hiragana: "せいりょくたこ",
        romaji: "seiryokutako",
        english: "Teal Octopus",
        description: "Gain orbiting projectiles",
        color: "#008080",
        hoverColor: 0x005f5f,
        onAcquire: function () {
            window.activateOrbitingProjectile();
        }
    },
    "AMBER_BEETLE": {
        kanji: "琥珀甲",
        hiragana: "こはくこう",
        romaji: "kohakukou",
        english: "Amber Beetle",
        description: "Drops explosive mines that damage enemies",
        color: "#ffbf00",
        hoverColor: 0xbb8c00,
        onAcquire: function () {
            window.activateLandmines();
        }
    },

    // Food perks that increase max HP and heal the player
    "SUSHI": {
        kanji: "寿司",
        hiragana: "すし",
        romaji: "sushi",
        english: "Sushi",
        description: "+1 END, full heal",
        color: "#FFFFFF",
        hoverColor: 0xE0E0E0,
        onAcquire: function () {
            window.modifyStat('health', 1);
            window.fullHeal();
        }
    },
    "RAMEN": {
        kanji: "拉麺",
        hiragana: "らーめん",
        romaji: "rāmen",
        english: "Ramen",
        description: "+1 END and fully heals",
        color: "#FFA07A",
        hoverColor: 0xDD8866,
        onAcquire: function () {
            window.modifyStat('health', 1);
            window.fullHeal();
        }
    },
    "ONIGIRI": {
        kanji: "御握",
        hiragana: "おにぎり",
        romaji: "onigiri",
        english: "Rice Ball",
        description: "+1 END and fully heals",
        color: "#F5F5DC",
        hoverColor: 0xE5E5CC,
        onAcquire: function () {
            window.modifyStat('health', 1);
            window.fullHeal();
        }
    },
    "MOCHI": {
        kanji: "餅",
        hiragana: "もち",
        romaji: "mochi",
        english: "Rice Cake",
        description: "+1 END and fully heals",
        color: "#FFE4E1",
        hoverColor: 0xEED4D1,
        onAcquire: function () {
            window.modifyStat('health', 1);
            window.fullHeal();
        }
    },
    "DANGO": {
        kanji: "団子",
        hiragana: "だんご",
        romaji: "dango",
        english: "Dumpling",
        description: "+1 END and fully heals",
        color: "#F0E68C",
        hoverColor: 0xE0D67C,
        onAcquire: function () {
            window.modifyStat('health', 1);
            window.fullHeal();
        }
    },
    "TEMPURA": {
        kanji: "天麩羅",
        hiragana: "てんぷら",
        romaji: "tempura",
        english: "Tempura",
        description: "+1 END and fully heals",
        color: "#FFD700",
        hoverColor: 0xEEC700,
        onAcquire: function () {
            window.modifyStat('health', 1);
            window.fullHeal();
        }
    },
    "UDON": {
        kanji: "饂飩",
        hiragana: "うどん",
        romaji: "udon",
        english: "Udon Noodles",
        description: "+1 END and fully heals",
        color: "#FAEBD7",
        hoverColor: 0xEADBc7,
        onAcquire: function () {
            window.modifyStat('health', 1);
            window.fullHeal();
        }
    },
    "YAKITORI": {
        kanji: "焼鳥",
        hiragana: "やきとり",
        romaji: "yakitori",
        english: "Grilled Chicken",
        description: "+1 END and fully heals",
        color: "#CD853F",
        hoverColor: 0xBD752F,
        onAcquire: function () {
            window.modifyStat('health', 1);
            window.fullHeal();
        }
    },
    "TAKOYAKI": {
        kanji: "蛸焼",
        hiragana: "たこやき",
        romaji: "takoyaki",
        english: "Octopus Balls",
        description: "+1 END and fully heals",
        color: "#8B4513",
        hoverColor: 0x7B3503,
        onAcquire: function () {
            window.modifyStat('health', 1);
            window.fullHeal();
        }
    },
    "GYOZA": {
        kanji: "餃子",
        hiragana: "ぎょうざ",
        romaji: "gyōza",
        english: "Dumplings",
        description: "+1 END and fully heals",
        color: "#D3D3D3",
        hoverColor: 0xC3C3C3,
        onAcquire: function () {
            window.modifyStat('health', 1);
            window.fullHeal();
        }
    },
    "TAIYAKI": {
        kanji: "鯛焼",
        hiragana: "たいやき",
        romaji: "taiyaki",
        english: "Fish-shaped Cake",
        description: "+1 END and fully heals",
        color: "#DEB887",
        hoverColor: 0xCEA877,
        onAcquire: function () {
            window.modifyStat('health', 1);
            window.fullHeal();
        }
    },
    "BENTO": {
        kanji: "弁当",
        hiragana: "べんとう",
        romaji: "bentō",
        english: "Lunch Box",
        description: "+1 END and fully heals",
        color: "#FF6347",
        hoverColor: 0xEF5337,
        onAcquire: function () {
            window.modifyStat('health', 1);
            window.fullHeal();
        }
    },
    "GREEN_VENOM": {
        kanji: "緑毒",
        hiragana: "みどりどく",
        romaji: "midoridoku",
        english: "Green Venom",
        description: "Chance to fire poisonous projectiles that deal damage over time",
        color: "#2aad27",
        hoverColor: 0x1a8d17,
        onAcquire: function () {
        }
    },
    "AZURE_FORK": {
        kanji: "蒼叉",
        hiragana: "あおまた",
        romaji: "aomata",
        english: "Azure Fork",
        description: "Projectiles have a chance to split in two when hitting enemies",
        color: "#1E90FF",
        hoverColor: 0x0070DD,
        onAcquire: function () {
            // The logic for this is handled in the projectileHitEnemy function
        }
    },
    "SCARLET_EMBER": {
        kanji: "緋炎",
        hiragana: "ひえん",
        romaji: "hien",
        english: "Scarlet Ember",
        description: "Projectiles may leave fire that burns enemies over time",
        color: "#FF4500",
        hoverColor: 0xCC3700,
        onAcquire: function () {
            // Logic handled in projectileHitEnemy
        }
    },

    // Red animal perks (damage focused)
    "RED_TIGER": {
        kanji: "赤虎",
        hiragana: "あかとら",
        romaji: "akatora",
        english: "Red Tiger",
        description: "+1 POW",
        color: "#ff3333",
        hoverColor: 0xbb2222,
        onAcquire: function () {
            window.modifyStat('damage', 1);
        }
    },
    "RED_HAWK": {
        kanji: "赤鷹",
        hiragana: "あかたか",
        romaji: "akataka",
        english: "Red Hawk",
        description: "+1 POW / +1 AGI",
        color: "#ff3333",
        hoverColor: 0xbb2222,
        onAcquire: function () {
            window.modifyStat('damage', 1);
            window.modifyStat('fireRate', 1);
        }
    },
    "RED_BEAR": {
        kanji: "赤熊",
        hiragana: "あかくま",
        romaji: "akakuma",
        english: "Red Bear",
        description: "+2 POW / -1 AGI",
        color: "#ff3333",
        hoverColor: 0xbb2222,
        onAcquire: function () {
            window.modifyStat('damage', 2);
            window.modifyStat('fireRate', -1);
        }
    },
    "RED_SCORPION": {
        kanji: "赤蠍",
        hiragana: "あかさそり",
        romaji: "akasasori",
        english: "Red Scorpion",
        description: "+2 POW / -1 LUK",
        color: "#ff3333",
        hoverColor: 0xbb2222,
        onAcquire: function () {
            window.modifyStat('damage', 2);
            window.modifyStat('luck', -1);
        }
    },
    "RED_FOX": {
        kanji: "赤狐",
        hiragana: "あかきつね",
        romaji: "akakitsune",
        english: "Red Fox",
        description: "+1 POW / +1 LUK",
        color: "#ff3333",
        hoverColor: 0xbb2222,
        onAcquire: function () {
            window.modifyStat('damage', 1);
            window.modifyStat('luck', 1);
        }
    },
    "RED_WOLF": {
        kanji: "赤狼",
        hiragana: "あかおおかみ",
        romaji: "akaookami",
        english: "Red Wolf",
        description: "+1 POW",
        color: "#ff3333",
        hoverColor: 0xbb2222,
        onAcquire: function () {
            window.modifyStat('damage', 1);
        }
    },
    "RED_SNAKE": {
        kanji: "赤蛇",
        hiragana: "あかへび",
        romaji: "akahebi",
        english: "Red Snake",
        description: "+1 POW",
        color: "#ff3333",
        hoverColor: 0xbb2222,
        onAcquire: function () {
            window.modifyStat('damage', 1);
        }
    },
    "RED_MANTIS": {
        kanji: "赤螳螂",
        hiragana: "あかとうろう",
        romaji: "akatourou",
        english: "Red Mantis",
        description: "+1 POW",
        color: "#ff3333",
        hoverColor: 0xbb2222,
        onAcquire: function () {
            window.modifyStat('damage', 1);
        }
    },
    "RED_LION": {
        kanji: "赤獅子",
        hiragana: "あかしし",
        romaji: "akashishi",
        english: "Red Lion",
        description: "+1 POW",
        color: "#ff3333",
        hoverColor: 0xbb2222,
        onAcquire: function () {
            window.modifyStat('damage', 1);
        }
    },
    "RED_FALCON": {
        kanji: "赤隼",
        hiragana: "あかはやぶさ",
        romaji: "akahayabusa",
        english: "Red Falcon",
        description: "+1 POW",
        color: "#ff3333",
        hoverColor: 0xbb2222,
        onAcquire: function () {
            window.modifyStat('damage', 1);
        }
    },

    // Yellow animal perks (fire rate focused)
    "YELLOW_CHEETAH": {
        kanji: "黄豹",
        hiragana: "きひょう",
        romaji: "kihyou",
        english: "Yellow Cheetah",
        description: "+1 AGI",
        color: "#ffd700",
        hoverColor: 0xcca700,
        onAcquire: function () {
            window.modifyStat('fireRate', 1);
        }
    },
    "YELLOW_HUMMINGBIRD": {
        kanji: "黄蜂鳥",
        hiragana: "きはちどり",
        romaji: "kihachidori",
        english: "Yellow Hummingbird",
        description: "+4 AGI / -2 POW",
        color: "#ffd700",
        hoverColor: 0xcca700,
        onAcquire: function () {
            window.modifyStat('fireRate', 4);
            window.modifyStat('damage', -2);
        }
    },
    "YELLOW_WASP": {
        kanji: "黄蜂",
        hiragana: "きばち",
        romaji: "kibachi",
        english: "Yellow Wasp",
        description: "+2 AGI / -2 END",
        color: "#ffd700",
        hoverColor: 0xcca700,
        onAcquire: function () {
            window.modifyStat('fireRate', 2);
            window.modifyStat('health', -2);
        }
    },
    "YELLOW_JACKAL": {
        kanji: "黄豺",
        hiragana: "きやまいぬ",
        romaji: "kiyamainu",
        english: "Yellow Jackal",
        description: "+3 AGI / -1 POW / -1 END",
        color: "#ffd700",
        hoverColor: 0xcca700,
        onAcquire: function () {
            window.modifyStat('fireRate', 3);
            window.modifyStat('damage', -1);
            window.modifyStat('health', -1);
        }
    },
    "YELLOW_CANARY": {
        kanji: "黄鳥",
        hiragana: "きどり",
        romaji: "kidori",
        english: "Yellow Canary",
        description: "+1 AGI",
        color: "#ffd700",
        hoverColor: 0xcca700,
        onAcquire: function () {
            window.modifyStat('fireRate', 1);
        }
    },
    "YELLOW_HORNET": {
        kanji: "黄蜂",
        hiragana: "きすずめばち",
        romaji: "kisuzumebachi",
        english: "Yellow Hornet",
        description: "+1 AGI",
        color: "#ffd700",
        hoverColor: 0xcca700,
        onAcquire: function () {
            window.modifyStat('fireRate', 1);
        }
    },
    "YELLOW_BEE": {
        kanji: "黄蜜蜂",
        hiragana: "きみつばち",
        romaji: "kimitsubachi",
        english: "Yellow Bee",
        description: "+1 AGI",
        color: "#ffd700",
        hoverColor: 0xcca700,
        onAcquire: function () {
            window.modifyStat('fireRate', 1);
        }
    },
    "YELLOW_FINCH": {
        kanji: "黄雀",
        hiragana: "きひわ",
        romaji: "kihiwa",
        english: "Yellow Finch",
        description: "+1 AGI",
        color: "#ffd700",
        hoverColor: 0xcca700,
        onAcquire: function () {
            window.modifyStat('fireRate', 1);
        }
    },
    "YELLOW_MONGOOSE": {
        kanji: "黄鼬",
        hiragana: "きまんぐーす",
        romaji: "kimanguusu",
        english: "Yellow Mongoose",
        description: "+1 AGI",
        color: "#ffd700",
        hoverColor: 0xcca700,
        onAcquire: function () {
            window.modifyStat('fireRate', 1);
        }
    },
    "YELLOW_SQUIRREL": {
        kanji: "黄栗鼠",
        hiragana: "きりす",
        romaji: "kirisu",
        english: "Yellow Squirrel",
        description: "+1 AGI",
        color: "#ffd700",
        hoverColor: 0xcca700,
        onAcquire: function () {
            window.modifyStat('fireRate', 1);
        }
    },
    "YELLOW_CICADA": {
        kanji: "黄蝉",
        hiragana: "きせみ",
        romaji: "kisemi",
        english: "Yellow Cicada",
        description: "+1 AGI",
        color: "#ffd700",
        hoverColor: 0xcca700,
        onAcquire: function () {
            window.modifyStat('fireRate', 1);
        }
    },
    "YELLOW_CRICKET": {
        kanji: "黄蟋蟀",
        hiragana: "きこおろぎ",
        romaji: "kikohrogi",
        english: "Yellow Cricket",
        description: "+1 AGI",
        color: "#ffd700",
        hoverColor: 0xcca700,
        onAcquire: function () {
            window.modifyStat('fireRate', 1);
        }
    },

    // Purple animal perks (luck focused)
    "PURPLE_MONKEY": {
        kanji: "紫猿",
        hiragana: "むらさきざる",
        romaji: "murasakizaru",
        english: "Purple Monkey",
        description: "+1 LUK",
        color: "#9370db",
        hoverColor: 0x7350bb,
        onAcquire: function () {
            window.modifyStat('luck', 1);
        }
    },
    "PURPLE_CAT": {
        kanji: "紫猫",
        hiragana: "むらさきねこ",
        romaji: "murasakineko",
        english: "Purple Cat",
        description: "+1 LUK",
        color: "#9370db",
        hoverColor: 0x7350bb,
        onAcquire: function () {
            window.modifyStat('luck', 1);
        }
    },
    "PURPLE_BUTTERFLY": {
        kanji: "紫蝶",
        hiragana: "むらさきちょう",
        romaji: "murasakichou",
        english: "Purple Butterfly",
        description: "+1 LUK",
        color: "#9370db",
        hoverColor: 0x7350bb,
        onAcquire: function () {
            window.modifyStat('luck', 1);
        }
    },
    "PURPLE_RABBIT": {
        kanji: "紫兎",
        hiragana: "むらさきうさぎ",
        romaji: "murasakiusagi",
        english: "Purple Rabbit",
        description: "+2 LUK / -1 END",
        color: "#9370db",
        hoverColor: 0x7350bb,
        onAcquire: function () {
            window.modifyStat('luck', 2);
            window.modifyStat('health', -1);
        }
    },
    "PURPLE_OWL": {
        kanji: "紫梟",
        hiragana: "むらさきふくろう",
        romaji: "murasakifukurou",
        english: "Purple Owl",
        description: "+1 LUK",
        color: "#9370db",
        hoverColor: 0x7350bb,
        onAcquire: function () {
            window.modifyStat('luck', 1);
        }
    },
    "PURPLE_FOX": {
        kanji: "紫狐",
        hiragana: "むらさききつね",
        romaji: "murasakikitsune",
        english: "Purple Fox",
        description: "+3 LUK / -1 POW / -1 AGI",
        color: "#9370db",
        hoverColor: 0x7350bb,
        onAcquire: function () {
            window.modifyStat('luck', 3);
            window.modifyStat('damage', -1);
            window.modifyStat('fireRate', -1);
        }
    },
    "PURPLE_LADYBUG": {
        kanji: "紫瓢虫",
        hiragana: "むらさきてんとうむし",
        romaji: "murasakitentoumushi",
        english: "Purple Ladybug",
        description: "+1 LUK",
        color: "#9370db",
        hoverColor: 0x7350bb,
        onAcquire: function () {
            window.modifyStat('luck', 1);
        }
    },
    "PURPLE_BAT": {
        kanji: "紫蝙蝠",
        hiragana: "むらさきこうもり",
        romaji: "murasakikoumori",
        english: "Purple Bat",
        description: "+1 LUK",
        color: "#9370db",
        hoverColor: 0x7350bb,
        onAcquire: function () {
            window.modifyStat('luck', 1);
        }
    },
    "PURPLE_CHAMELEON": {
        kanji: "紫蜥蜴",
        hiragana: "むらさきかめれおん",
        romaji: "murasakikamereon",
        english: "Purple Chameleon",
        description: "+2 LUK / -1 AGI",
        color: "#9370db",
        hoverColor: 0x7350bb,
        onAcquire: function () {
            window.modifyStat('luck', 2);
            window.modifyStat('fireRate', -1);
        }
    },
    "PURPLE_HARE": {
        kanji: "紫野兎",
        hiragana: "むらさきのうさぎ",
        romaji: "murasakinousagi",
        english: "Purple Hare",
        description: "+1 LUK",
        color: "#9370db",
        hoverColor: 0x7350bb,
        onAcquire: function () {
            window.modifyStat('luck', 1);
        }
    },
    "PURPLE_MOTH": {
        kanji: "紫蛾",
        hiragana: "むらさきが",
        romaji: "murasakiga",
        english: "Purple Moth",
        description: "+1 LUK",
        color: "#9370db",
        hoverColor: 0x7350bb,
        onAcquire: function () {
            window.modifyStat('luck', 1);
        }
    },
    "PURPLE_CHAOS": {
        kanji: "紫混沌",
        hiragana: "むらさきこんとん",
        romaji: "murasakikonton",
        english: "Purple Chaos",
        description: "Randomly rearranges all your stats\nThen +2 LUK",
        color: "#9932cc",
        hoverColor: 0x8822bc,
        onAcquire: function () {
            // Store current stat values
            const stats = {
                damage: playerDamage,
                health: maxPlayerHealth,
                luck: playerLuck,
                fireRate: playerFireRate
            };

            // Create an array of stat names
            const statNames = Object.keys(stats);

            // Shuffle the array
            for (let i = statNames.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [statNames[i], statNames[j]] = [statNames[j], statNames[i]];
            }

            // Create a shuffled mapping
            const newValues = {};
            const originalOrder = ['damage', 'health', 'luck', 'fireRate'];

            for (let i = 0; i < originalOrder.length; i++) {
                newValues[originalOrder[i]] = stats[statNames[i]];
            }

            // Apply the new values (need to reset first)
            window.modifyStat('damage', newValues.damage - playerDamage);
            window.modifyStat('health', newValues.health - maxPlayerHealth);
            window.modifyStat('luck', newValues.luck - playerLuck);
            window.modifyStat('fireRate', newValues.fireRate - playerFireRate);

            // Now add +2 to luck
            window.modifyStat('luck', 2);

            // Visual effect for chaos
            const scene = game.scene.scenes[0];
            if (scene) {
                const chaosEffect = scene.add.text(player.x, player.y, '⚡ CHAOS! ⚡', {
                    fontFamily: 'Arial',
                    fontSize: '24px',
                    color: '#9932cc',
                    stroke: '#ffffff',
                    strokeThickness: 2
                }).setOrigin(0.5);

                scene.tweens.add({
                    targets: chaosEffect,
                    alpha: { from: 1, to: 0 },
                    y: chaosEffect.y - 50,
                    scale: { from: 1, to: 2 },
                    duration: 1500,
                    onComplete: function () {
                        chaosEffect.destroy();
                    }
                });
            }
        }
    },

    // Green animal perks (converted to something else)
    "GREEN_DEER": {
        kanji: "緑鹿",
        hiragana: "みどりしか",
        romaji: "midorishika",
        english: "Green Deer",
        description: "+2 END",
        color: "#00cc66",
        hoverColor: 0x00aa44,
        onAcquire: function () {
            window.modifyStat('health', 2);
        }
    },
    "GREEN_FROG": {
        kanji: "緑蛙",
        hiragana: "みどりかえる",
        romaji: "midorikaeru",
        english: "Green Frog",
        description: "+1 POW",
        color: "#00cc66",
        hoverColor: 0x00aa44,
        onAcquire: function () {
            window.modifyStat('damage', 1);
        }
    },
    "GREEN_GAZELLE": {
        kanji: "緑羚羊",
        hiragana: "みどりがゼル",
        romaji: "midorigazeru",
        english: "Green Gazelle",
        description: "+2 AGI / -1 END",
        color: "#00cc66",
        hoverColor: 0x00aa44,
        onAcquire: function () {
            window.modifyStat('fireRate', 2);
            window.modifyStat('health', -1);
        }
    },
    "GREEN_HORSE": {
        kanji: "緑馬",
        hiragana: "みどりうま",
        romaji: "midoriuma",
        english: "Green Horse",
        description: "+3 AGI / -1 POW",
        color: "#00cc66",
        hoverColor: 0x00aa44,
        onAcquire: function () {
            window.modifyStat('fireRate', 3);
            window.modifyStat('damage', -1);
        }
    },
    "GREEN_CRICKET": {
        kanji: "緑蟋蟀",
        hiragana: "みどりこおろぎ",
        romaji: "midorikohrogi",
        english: "Green Cricket",
        description: "+1 LUK",
        color: "#00cc66",
        hoverColor: 0x00aa44,
        onAcquire: function () {
            window.modifyStat('luck', 1);
        }
    },
    "GREEN_RABBIT": {
        kanji: "緑兎",
        hiragana: "みどりうさぎ",
        romaji: "midoriusagi",
        english: "Green Rabbit",
        description: "+2 LUK / -1 AGI",
        color: "#00cc66",
        hoverColor: 0x00aa44,
        onAcquire: function () {
            window.modifyStat('luck', 2);
            window.modifyStat('fireRate', -1);
        }
    },
    "GREEN_LIZARD": {
        kanji: "緑蜥蜴",
        hiragana: "みどりとかげ",
        romaji: "midoritokage",
        english: "Green Lizard",
        description: "+1 AGI",
        color: "#00cc66",
        hoverColor: 0x00aa44,
        onAcquire: function () {
            window.modifyStat('fireRate', 1);
        }
    },
    "GREEN_HUMMINGBIRD": {
        kanji: "緑蜂鳥",
        hiragana: "みどりはちどり",
        romaji: "midorihachidori",
        english: "Green Hummingbird",
        description: "+1 AGI / +1 POW",
        color: "#00cc66",
        hoverColor: 0x00aa44,
        onAcquire: function () {
            window.modifyStat('fireRate', 1);
            window.modifyStat('damage', 1);
        }
    },

    "GREEN_DOLPHIN": {
        kanji: "緑海豚",
        hiragana: "みどりいるか",
        romaji: "midoriiruka",
        english: "Green Dolphin",
        description: "+2 AGI / -1 END",
        color: "#00cc66",
        hoverColor: 0x00aa44,
        onAcquire: function () {
            window.modifyStat('fireRate', 2);
            window.modifyStat('health', -1);
        }
    },

    "GREEN_GRASSHOPPER": {
        kanji: "緑蝗",
        hiragana: "みどりばった",
        romaji: "midoribatta",
        english: "Green Grasshopper",
        description: "+1 AGI / +1 LUK",
        color: "#00cc66",
        hoverColor: 0x00aa44,
        onAcquire: function () {
            window.modifyStat('fireRate', 1);
            window.modifyStat('luck', 1);
        }
    },

    "GREEN_SNAKE": {
        kanji: "緑蛇",
        hiragana: "みどりへび",
        romaji: "midorihebi",
        english: "Green Snake",
        description: "+1 AGI",
        color: "#00cc66",
        hoverColor: 0x00aa44,
        onAcquire: function () {
            window.modifyStat('fireRate', 1);
        }
    },

    "GREEN_DREAM": {
        kanji: "緑夢",
        hiragana: "みどりゆめ",
        romaji: "midoriyume",
        english: "Green Dream",
        description: "Creates after-images that damage enemies",
        color: "#00cc66",
        hoverColor: 0x00aa44,
        onAcquire: function () {
            window.activateAfterImages();
        }
    },
    "PURPLE_OWL": {
        kanji: "紫梟",
        hiragana: "むらさきふくろう",
        romaji: "murasakifukurou",
        english: "Purple Owl",
        description: "Chance to fire a second projectile",
        color: "#9370db",
        hoverColor: 0x7350bb,
        onAcquire: function () {
            // logic in index.html
        }
    },
    "PURPLE_HEDGEHOG": {
        kanji: "紫針鼠",
        hiragana: "むらさきはりねずみ",
        romaji: "murasakiharinezumi",
        english: "Purple Hedgehog",
        description: "Release projectiles in all directions when hit",
        color: "#9370db",
        hoverColor: 0x7350bb,
        onAcquire: function () {
            // logic in index.html
        }
    },
    "CRIMSON_SCATTER": {
        kanji: "紅散",
        hiragana: "こうさん",
        romaji: "kousan",
        english: "Crimson Scatter",
        description: "Higher damage at short range",
        color: "#FF3030",
        hoverColor: 0xC02020,
        onAcquire: function () {
        }
    },
    "CRIMSON_FURY": {
        kanji: "紅怒",
        hiragana: "くれないいかり",
        romaji: "kurenai ikari",
        english: "Crimson Fury",
        description: "Double damage when below 25% health",
        color: "#FF0000",
        hoverColor: 0xCC0000,
        onAcquire: function () {
            // The effect is handled by a state monitor system
            // We'll implement this in the update function
        }
    }
};

// Helper functions for the perk system
const PerkSystem = {
    // Get all available perks
    getAllPerks: function () {
        return Object.keys(PERKS).map(key => ({
            id: key,
            ...PERKS[key]
        }));
    },

    // Get perks by category
    getPerksByCategory: function (category) {
        return Object.keys(PERKS)
            .filter(key => PERKS[key].category === category)
            .map(key => ({
                id: key,
                ...PERKS[key]
            }));
    },

    // Get a single perk by ID
    getPerkById: function (perkId) {
        if (!PERKS[perkId]) return null;
        return {
            id: perkId,
            ...PERKS[perkId]
        };
    },

    // Get random perks (avoiding duplicates)
    getRandomPerks: function (count, excludeIds = []) {
        const availablePerks = Object.keys(PERKS)
            .filter(key => !excludeIds.includes(key))
            .map(key => ({
                id: key,
                ...PERKS[key]
            }));

        // Shuffle the array
        for (let i = availablePerks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [availablePerks[i], availablePerks[j]] = [availablePerks[j], availablePerks[i]];
        }

        return availablePerks.slice(0, count);
    },

    // Apply a perk to the game
    applyPerk: function (scene, perkId) {
        const perk = PERKS[perkId];
        if (!perk) return false;

        console.log("Applying perk:", perkId);

        // Call the onAcquire function
        perk.onAcquire();

        return true;
    }
};