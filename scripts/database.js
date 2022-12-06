/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        , {
            id: 1,
            name: "Bart",
            food: "crustaceans",
            size: 3
        }


        , {
            id: 2,
            name: "Fred",
            food: "small fish",
            size: 6
        }


        , {
            id: 3,
            name: "Bob",
            food: "crustaceans",
            size: 3
        }

        , {
            id: 4,
            name: "Rob",
            food: "medium fish",
            size: 9
        }

        , {
            id: 5,
            name: "Sam",
            food: "lobster",
            size: 7.5
        }

        , {
            id: 6,
            name: "Kim",
            food: "medium fish",
            size: 9
        }

        , {
            id: 7,
            name: "Josh",
            food: "small fish",
            size: 6
        }

    ]

}
console.log(database)

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}