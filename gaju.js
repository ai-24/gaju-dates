const { DateTime } = require('luxon')
const Input = require('./input')

class Gaju {
  static async cal () {
    const now = DateTime.now()
    const info = await Input.birthdayInfo()
    const peopleInfo = []
    for (let i = 0; i < (info.length); i = i + 2) {
      const birthday = info[i + 1]
      const age = now.year - birthday.year
      const personInfo = { name: info[i] }
      if ((now.month < birthday.month) || (now.month === birthday.month && now.day < birthday.day)) {
        personInfo.age = age - 1
      } else {
        personInfo.age = age
      }
      const birthOfMonthAndDay = '/' + birthday.month + '/' + birthday.day
      personInfo.kanreki = birthday.year + 60 + birthOfMonthAndDay
      personInfo.koki = birthday.year + 70 + birthOfMonthAndDay
      personInfo.kiju = birthday.year + 77 + birthOfMonthAndDay
      personInfo.sanju = birthday.year + 80 + birthOfMonthAndDay
      personInfo.beiju = birthday.year + 88 + birthOfMonthAndDay
      personInfo.sotsuju = birthday.year + 90 + birthOfMonthAndDay
      personInfo.hakuju = birthday.year + 99 + birthOfMonthAndDay
      personInfo.hyakuju = birthday.year + 100 + birthOfMonthAndDay
      peopleInfo.push(personInfo)
    }
    return peopleInfo
  }
}

module.exports = Gaju
