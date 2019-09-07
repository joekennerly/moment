//Get current date and time of the
//start of the week
let m = moment().startOf("week")
let income = [
    {
        name: "job",
        date: "2019-09-02",
        freq: 2,
        timeUnit: "weeks",
        user_id: 1,
        id: 1
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

//Accepts freqency of weeks and
//Duration is the total number of weeks.
function getDates(freq=1, duration=12) {

    //Create empty array to put a {date}
    let dates = []

    //0 = this week; loop by duration at freq
    for (let i = 0; i < duration; i = i + freq){
        date = m.add(i, "weeks").format("YYYY-MM-DD")
        dates.push({
            date,
            income: []
        })
        income.forEach(one => {
            if (moment(one.date).isSame(date, "week")) {
                dates[i].income.push(one)
            }
        })
    }
    console.table(dates)
}

//Default = array with 1 datestr for 12 weeks
getDates()