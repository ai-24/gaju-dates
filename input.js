const { prompt } = require('enquirer')
const { DateTime } = require('luxon')
const { Confirm } = require('enquirer')

class Input {
  static async getBirthday () {
    const regexp = /\d{4}\D\d+\D\d+/
    const response = await prompt([
      {
        type: 'input',
        name: 'birthday',
        message: '誕生日を西暦で入力してください',
        validate: (required) => {
          if (regexp.test(required)) {
            return true
          }
          return '誕生日を正しく入力してください'
        }
      },
      {
        type: 'input',
        name: 'name',
        message: '名前(あだ名)を入力してください'
      }
    ])
    const data = []
    data.push(response.name)
    data.push(response.birthday.split(/\D/))
    return data
  }

  static async addBirthday () {
    const response = []
    const question = await new Confirm({
      name: 'question',
      message: 'もう一人の賀寿も調べますか?'
    })
    await question.run()
      .then(
        answer =>
          response.push(answer)
      )
      .catch(console.error)
    return response[0]
  }

  static async birthdayInfo () {
    const data = []
    console.log('\n\n\n     🎉誕生日と名前（あだ名）を入力すると賀寿の日にちが表示されます🎉\n\n')
    const info = await this.getBirthday()
    const date = await DateTime.fromObject({ year: info[1][0], month: info[1][1], day: info[1][2] })
    data.push(info[0])
    data.push(date)
    while (await this.addBirthday()) {
      const info = await this.getBirthday()
      const date = await DateTime.fromObject({ year: info[1][0], month: info[1][1], day: info[1][2] })
      data.push(info[0])
      data.push(date)
    }
    return data
  }
}

module.exports = Input
