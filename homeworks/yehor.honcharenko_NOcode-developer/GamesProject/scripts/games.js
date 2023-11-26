document.addEventListener('DOMContentLoaded', () => {
    // games-mock.js
    const games = [
        {
            id: 1136,
            title: 'Overwatch 2',
            thumbnail: 'https://www.mmobomb.com/g/1136/thumbnail.jpg',
            short_description: 'Big changes come to the Overwatch formula in this sequel...and so does PvE content, eventually.',
            game_url: 'https://www.mmobomb.com/open/overwatch-2',
            genre: 'Shooter',
            platform: 'PC (Windows)',
            publisher: 'Activision Blizzard King',
            developer: 'Blizzard Entertainment',
            release_date: '2022-10-04',
            profile_url: 'https://www.mmobomb.com/overwatch-2',
        },
        {
            id: 523,
            title: 'Lost Ark',
            thumbnail: 'https://www.mmobomb.com/g/523/thumbnail.jpg',
            short_description: 'Journey throughout the realm of Arkesia and do battle against a demon invasion in Smilegate\'s free-to-play ARPG Lost Ark!',
            game_url: 'https://www.mmobomb.com/open/lost-ark',
            genre: 'ARPG',
            platform: 'PC (Windows)',
            publisher: 'Amazon Games',
            developer: 'Smilegate',
            release_date: '2022-02-11',
            profile_url: 'https://www.mmobomb.com/lost-ark',
        },
        {
            id: 1113,
            title: 'PUBG: BATTLEGROUNDS',
            thumbnail: 'https://www.mmobomb.com/g/1113/thumbnail.jpg',
            short_description: 'Battle the odds in a 100v1 death match in PUBG: Battlegrounds, the classic free-to-play battle royale experience.',
            game_url: 'https://www.mmobomb.com/open/pubg',
            genre: 'Shooter',
            platform: 'PC (Windows)',
            publisher: 'KRAFTON, Inc.',
            developer: 'KRAFTON, Inc.',
            release_date: '2022-01-12',
            profile_url: 'https://www.mmobomb.com/pubg',
        },
        {
            id: 508,
            title: 'Enlisted',
            thumbnail: 'https://www.mmobomb.com/g/508/thumbnail.jpg',
            short_description: 'Step into the most famous battles of World War II in Enlisted, a free-to-play shooter from the makers of War Thunder. Experience squad-based combat from the ground level, as you command your troops, outfitted with era-authentic weapons and gear, in massive battles with over a hundred soldiers apiece.',
            game_url: 'https://www.mmobomb.com/open/enlisted',
            genre: 'Shooter',
            platform: 'PC (Windows)',
            publisher: 'Gaijin Entertainment',
            developer: 'Darkflow Software',
            release_date: '2021-04-08',
            profile_url: 'https://www.mmobomb.com/enlisted',
        },
        {
            id: 1120,
            title: 'Fall Guys',
            thumbnail: 'https://www.mmobomb.com/g/1120/thumbnail.jpg',
            short_description: 'Fall Guys is a free-to-play massively multiplayer party royale game.',
            game_url: 'https://www.mmobomb.com/open/fall-guys',
            genre: 'Battle Royale',
            platform: 'PC (Windows)',
            publisher: 'Mediatonic',
            developer: 'Mediatonic',
            release_date: '2020-08-04',
            profile_url: 'https://www.mmobomb.com/fall-guys',
        },
        {
            id: 340,
            title: 'Game Of Thrones Winter Is Coming',
            thumbnail: 'https://www.mmobomb.com/g/340/thumbnail.jpg',
            short_description: 'Fame and glory await you in Westeros, in Game of Thrones: Winter Is Coming, the officially licensed free-to-play browser game based on the epic fantasy series by George R.R. Martin.',
            game_url: 'https://www.mmobomb.com/open/game-of-thrones-winter-is-coming',
            genre: 'Strategy',
            platform: 'Web Browser',
            publisher: 'GTArcade',
            developer: 'YOOZOO Games ',
            release_date: '2019-11-14',
            profile_url: 'https://www.mmobomb.com/game-of-thrones-winter-is-coming',
        },
        {
            id: 427,
            title: 'Drakensang Online',
            thumbnail: 'https://www.mmobomb.com/g/427/thumbnail.jpg',
            short_description: 'Drakensang Online is a free to play 3D action RPG game that features extraordinary 3D graphics and effects and heralds the next generation of free-to-play online browser games. With the ability to customize your character, skills and magic powers like never before, join your comrades to wage a brutal war against evil.',
            game_url: 'https://www.mmobomb.com/open/drakensang-online',
            genre: 'MMORPG',
            platform: 'Web Browser',
            publisher: 'Bigpoint',
            developer: 'Bigpoint',
            release_date: '2011-08-08',
            profile_url: 'https://www.mmobomb.com/drakensang-online',
        },
        {
            id: 380,
            title: 'Dark Orbit Reloaded',
            thumbnail: 'https://www.mmobomb.com/g/380/thumbnail.jpg',
            short_description: 'Take part in huge intergalactic battles and take on the whole galaxy in DarkOrbit, the free-to-play browser-based space combat MMO from Bigpoint -- now in 3-D! Choose your faction and your ship, each with their own strengths, and take off into adventure!',
            game_url: 'https://www.mmobomb.com/open/darkorbit',
            genre: 'Shooter',
            platform: 'Web Browser',
            publisher: 'Bigpoint',
            developer: 'Bigpoint',
            release_date: '2006-12-11',
            profile_url: 'https://www.mmobomb.com/darkorbit',
        },
        {
            id: 1122,
            title: 'MultiVersus',
            thumbnail: 'https://www.mmobomb.com/g/1122/thumbnail.jpg',
            short_description: 'Match up in 1v1, 2v2 co-op, or 4-person free-for-all modes in this free-to-play Smash-Style Brawler!',
            game_url: 'https://www.mmobomb.com/open/multiversus',
            genre: 'Fighting',
            platform: 'PC (Windows)',
            publisher: 'Warner Bros. Games',
            developer: 'Player First Games',
            release_date: '2022-07-19',
            profile_url: 'https://www.mmobomb.com/multiversus',
        },
        {
            id: 5,
            title: 'Crossout',
            thumbnail: 'https://www.mmobomb.com/g/5/thumbnail.jpg',
            short_description: 'Trick out your ride and take to the post-apocalyptic roads for battle in Crossout, the free-to-play vehicular combat game from Gaijin Entertainment! Featuring a vehicle design system with endless customization and fast-paced, armor-crunching combat, Crossout offers high-octane excitement in brief and explosive matches.',
            game_url: 'https://www.mmobomb.com/open/crossout',
            genre: 'Shooter',
            platform: 'PC (Windows)',
            publisher: 'Targem',
            developer: 'Gaijin',
            release_date: '2017-05-30',
            profile_url: 'https://www.mmobomb.com/crossout',
        },
    ];

    // 1. Создание функции createCardElement
    function createCardElement(game, template) {
        const card = template.content.cloneNode(true);

        card.querySelector('[data-title]').textContent = game.title;
        card.querySelector('[data-img]').src = game.thumbnail;
        card.querySelector('[data-short-description]').textContent = game.short_description;
        card.querySelector('[data-genre]').textContent = game.genre;
        card.querySelector('[data-platform]').textContent = game.platform;
        card.querySelector('[data-publisher]').textContent = game.publisher;
        card.querySelector('[data-developer]').textContent = game.developer;
        card.querySelector('[data-release-date]').textContent = game.release_date;

        return card;
    }

    // 2. Создание функции renderCards
    function renderCards(container, gamesArray) {
        let template = document.querySelector('template[data-type="card-template"]');
        if (!template) {
            template = document.createElement('template');
            template.innerHTML = `
                <article class="card">
                    <section class="card__header">
                        <img src="" alt="" class="card__img" style="width: 90px; height: 90px;" data-img>
                        <article class="card__about">
                            <h3 class="card__title" data-title></h3>
                            <p class="card__text" data-short-description></p>
                        </article>
                    </section>
                    <section class="card__info">
                        <article class="info">
                            <p class="info__title">Genre:</p>
                            <p class="info__value" data-genre></p>
                        </article>
                        <article class="info">
                            <p class="info__title">Platform:</p>
                            <p class="info__value" data-platform></p>
                        </article>
                        <article class="info">
                            <p class="info__title">Publisher:</p>
                            <p class="info__value" data-publisher></p>
                        </article>
                        <article class="info">
                            <p class="info__title">Developer:</p>
                            <p class="info__value" data-developer></p>
                        </article>
                        <article class="info">
                            <p class="info__title">Release date:</p>
                            <p class="info__value" data-release-date></p>
                        </article>
                    </section>
                </article>
            `;
            document.body.appendChild(template);
        }

        container.innerHTML = ''; // container clean
        gamesArray.forEach((game) => {
            const card = createCardElement(game, template);
            container.appendChild(card);
        });
    }

    // 3. Функция фильтрации
    function filterGames(gamesList, filters) {
        return gamesList.filter((game) => {
            const releaseYear = new Date(game.release_date).getFullYear();
            let match = false;
            filters.forEach((filter) => {
                if (filter === 'new' && releaseYear > 2020) {
                    match = true;
                }
                if (filter === 'old' && releaseYear < 2010) {
                    match = true;
                }
            });
            return match;
        });
    }

    // 5. Функция init
    function init() {
        const container = document.querySelector('.games__grid');
        const checkboxList = document.querySelectorAll('input[name="filter"]');

        // Render all games at start
        renderCards(container, games);

        // Add event listeners to the filter checkboxes
        checkboxList.forEach((checkbox) => {
            checkbox.addEventListener('change', () => {
                const filters = Array.from(document.querySelectorAll('input[name="filter"]:checked')).map((checkedCheckbox) => checkedCheckbox.dataset.filter);
                let filteredGames = games;
                if (filters.length > 0) {
                    filteredGames = filterGames(games, filters);
                }
                renderCards(container, filteredGames);
            });
        });
    }

    init();
});
