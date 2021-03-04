import React from 'react'
import axios from 'axios'


class PersonList extends React.Component{
    state = {
        persons : []
    }

    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res=>{
            console.log(res)
            const person = res.data
            this.setState({persons:person})
        })
    }

    render(){
        return (
            <ul>
            {this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
            </ul>
        )
    }
}

export default PersonList