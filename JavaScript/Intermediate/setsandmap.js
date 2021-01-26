//--------------------------------------Sets----------------------------------------------
// const lang = new Set()

// lang.add('eng')
// lang.add('tam')
// lang.add('hin')
// lang.add('tel')
// lang.add('eng')
// lang.add('mal')

// console.log(lang.delete('mal'))
//--------------------------------------Maps----------------------------------------------
countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]
const map = new Map(countries)

map.set('India','Delhi')

// console.log(map)

// console.log(map.get('Finland'))
// console.log(map.has('India'))

for(const [country,cap] of countries){
    console.log(country,cap)
}