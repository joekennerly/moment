let m = moment()
let income = [
    {
        name: "job",
        date: "2019-09-02",
        freq: 2,
        timeUnit: "weeks",
    },
    {
        name: "job2",
        date: "2019-09-03",
        freq: 1,
        timeUnit: "weeks",
        user_id: 1,
        id: 2
    }
]
let budgets = [
    {
        name: "rent",
        date: "2019-09-01",
        freq: 1,
        timeUnit: "months"
    },
    {
        name: "car ins",
        date: "2019-12-11",
        freq: 6,
        timeUnit: "months"
    },
    {
        name: "food",
        date: "2019-08-11",
        freq: 2,
        timeUnit: "weeks"
    }
]

//Expects an obj containing
// a date, freq, and timeUnit
function getDates(obj, duration=12) {
    start = moment(obj.date)
    let dates = []
    for (let i = 0; i < duration; i++){
        date = start.add(i == 0 ? 0 : obj.freq, obj.timeUnit).format("YYYY-MM-DD")
        dates.push(
            date
        )
    }
    return dates
}



let main = getDates({
    date: m.startOf("week").format("YYYY-MM-DD"),
    freq: 1,
    timeUnit: "weeks"
})

console.log(main)