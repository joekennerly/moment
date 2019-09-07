let m = moment().startOf("week")

function getDates(freq, duration) {
    let dates = []
    for (let i = 0; i < duration; i += freq){
        m2 = m.add(i, "weeks")
        dates.push(m2.format())
    }
    console.log(dates)
}

getDates(3,12)