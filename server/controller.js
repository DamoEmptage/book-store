let games = [
    {
        game: "Fifa 19",
        image_url: "http://media.contentapi.ea.com/content/www-easports/en_US/fifa/ultimate-team/news/2018/getting-started-with-fut-19/_jcr_content/imageShare.img.jpg",
        rating: {
            level: 7 / 10
        }
    },
    {
        game: "Apex Legends",
        image_url: "https://cdn.gamerant.com/wp-content/uploads/Apex-Legends-cross-play-update-plans.jpg.optimal.jpg",
        rating: {
            level: 9 / 10
        }
    }
]

module.exports = {
    read: (req, res) => {
        res.status(200).send(games)
    },
    create: (req, res) => {

        games.push(req.body);
        res.status(200).send(games);
    },

    delete: (req, res) => {
        const { game } = req.params;
        const updatedGames = game.filter((game, game) => game.name !== game)


        updatedTitle = games;
        res.status(200).send(games)

    }
}