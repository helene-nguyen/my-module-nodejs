//^books module
const dayjs = require('dayjs')
dayjs().format();
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);
const local = require('dayjs/locale/fr');
dayjs.locale('fr');

// Séléction de livres incontournables
const myModule = {
    books: [{
            title: "The Fellowship of the Ring",
            language: "English",
            country: "United Kingdom",
            author: "J.R.R. Tolkien",
            date: "1954-07-29"
        },
        {
            title: "Prelude to foundation",
            language: "English",
            country: "United States",
            author: "Isaac Asimov",
            date: "1988-11-08"
        },
        {
            title: "Voyage au centre de la terre",
            language: "Français",
            country: "France",
            author: "Jules Verne",
            date: "1864-11-25"
        },
        {
            title: "La nuit des temps",
            language: "Français",
            country: "France",
            author: "René Barjavel",
            date: "1968-05-20"
        },
        {
            title: "Carrion Comfort",
            language: "English",
            country: "United States",
            author: "Dan Simmons",
            date: "1989-02-15"
        }

    ],
    //^METHODS
    //sort array
    sortArray: function () {
        myModule.books.sort((a, b) => {
            let da = new Date(a.date);
            let db = new Date(b.date);
            return da - db;
        })
    },
    //info books
    infos: function (info) {
        let infos = '<tr>';

        for (let i = 0; i < myModule.books.length; i++) {
            infos += `<td>${myModule.books[i][info]}</td>`;
        };
        infos += '</tr>';

        return infos;
    },
    //title
    titles: function () {
        let titles = '<tr>';
        let titlesTab = Object.keys(myModule.books[0]);

        for (let t of titlesTab) {
            titles += `<td>${t}</td>`;
        }
        titles += '</tr>';

        return titles.toUpperCase();
    },
    //date
    date: function () {
        let date = '<tr>';
        for (let i = 0; i < myModule.books.length; i++) {
            let dateFormat = dayjs(`${myModule.books[i]['date']}`).format('dddd D MMMM YYYY');

            date += `<td>Publié le ${dateFormat}</td>`;
        };
        date += '</tr>';

        return date;
    },
    //date from now
    fromNow: function () {
        let fromNow = '<tr>';
        for (let i = 0; i < myModule.books.length; i++) {
            let dateFormat = myModule.books[i]['date']
            let dateFromNow = dayjs(dateFormat).fromNow(true);

            fromNow += `<td>Age du livre: ${dateFromNow}</td>`;
        };
        fromNow += '</tr>';

        return fromNow;
    }
}

module.exports = myModule;