import "dotenv/config.js";
import "../../config/database.js";
import Category from '../Category.js'
const uri = process.env.MONGO_LINK;
const categories = [
    {
        name: "shonen",
        detail:
            "Shonen manga are characterized by having a lot of action and often humorous situations with male protagonists.",
        admin_id: "64028053436fdf820504014d",
    },
    {
        name: "manhwa",
        detail:
            "The Manhwa is from South Korea and is read in the same direction as western books (horizontally and from left to right).",
        admin_id: "64028053436fdf820504014d",
    },
    {
        name: "marvel",
        detail: "American superhero comics",
        admin_id: "64028053436fdf820504014d",
    },
    {
        name: "dc",
        detail: "American superhero comics",
        admin_id: "64028053436fdf820504014d",
    },
    {
        name: "shojo",
        detail:
            "It is aimed especially at the adolescent female audience, being mostly starring a girl.",
        admin_id: "64028053436fdf820504014d",
    },
    {
        name: "seinen",
        detail: "Japanese seinen tells stories with a mature tone.",
        admin_id: "64028053436fdf820504014d",
    },
];

Category.insertMany(categories);