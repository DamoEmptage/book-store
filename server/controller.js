let titles = [
    {
        title: "Fifa 19",
        image_url: "http://media.contentapi.ea.com/content/www-easports/en_US/fifa/ultimate-team/news/2018/getting-started-with-fut-19/_jcr_content/imageShare.img.jpg",

    },
    {
        title: "Apex Legends",
        image_url: "https://cdn.gamerant.com/wp-content/uploads/Apex-Legends-cross-play-update-plans.jpg.optimal.jpg",

    }
]

module.exports = {
    read: (req, res) => {
        res.status(200).send(titles)
    },
    create: (req, res) => {

        titles.push(req.body);
        res.status(200).send(titles);
    },

    delete: (req, res) => {
        const { title } = req.params;
        titles = titles.filter((g) => title !== g.title)

        res.status(200).send(titles)

    }
}