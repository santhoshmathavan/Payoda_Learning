//JSON.parse
// const usersText = `{
//     "users":[
//       {
//         "firstName":"Asabeneh",
//         "lastName":"Yetayeh",
//         "age":250,
//         "email":"asab@asb.com"
//       },
//       {
//         "firstName":"Alex",
//         "lastName":"James",
//         "age":25,
//         "email":"alex@alex.com"
//       },
//       {
//       "firstName":"Lidiya",
//       "lastName":"Tekle",
//       "age":28,
//       "email":"lidiya@lidiya.com"
//       }
//     ]
//     }`

//     // const usersObj = JSON.parse(usersText, (key, value) => {
//     //     let newValue = 
//     //         key == 'firstName' && value == 'Lidiya' ? value='santhosh' : value
//     //     return newValue
//     //   })
//     //console.log(usersObj)

//     const json=JSON.parse(usersText)

//     for(const user of json.users){
//         console.log(user.firstName)
//     }
//-----------------------------------------JSON.STRINGIFY-------------------------------------
const users= {
    Alex:{
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
        },
      Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
      },
      Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
      }
}

const userObj=JSON.stringify(users)
