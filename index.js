const Gaju = require('./gaju')

class Output {
  static async print () {
    const info = await Gaju.cal()
    console.log('\n\n---------------------------------------------------------------------------')
    for (const i in info) {
      const person = info[i]
      console.log('\n' + person.name + 'さんの賀寿の日にちは以下の通りです。(満年齢で計算しています。過去の日付のものは表示されていません。)\n')
      if (person.age <= 60) {
        console.log('  還暦: ' + person.kanreki)
      }
      if (person.age <= 70) {
        console.log('  古希: ' + person.koki)
      }
      if (person.age <= 77) {
        console.log('  喜寿: ' + person.kiju)
      }
      if (person.age <= 80) {
        console.log('  傘寿: ' + person.sanju)
      }
      if (person.age <= 88) {
        console.log('  米寿: ' + person.beiju)
      }
      if (person.age <= 90) {
        console.log('  卒寿: ' + person.sotsuju)
      }
      if (person.age <= 99) {
        console.log('  白寿: ' + person.hakuju)
      }
      if (person.age <= 100) {
        console.log('  百寿: ' + person.hyakuju)
      }
      console.log('\n---------------------------------------------------------------------------')
    }
  }
}

Output.print()
