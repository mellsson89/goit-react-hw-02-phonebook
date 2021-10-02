import React,{Component} from "react";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";


class App extends Component {


    state = {
        contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
        filter: '',
    }

    handleFilter =(e) => {
        this.setState({
            filter:e.currentTarget.value
        })
    }

    addContact = (contact) => {
        const cloneName=this.state.contacts.find(({name}) => name === contact.name);
        if(cloneName) {
            const {name} =cloneName;
            alert(`${name} is already in contacts`);
            return;
        }

        this.setState(prevState => ({
           contacts:[contact,...prevState.contacts]
         }))
    }

    deleteContact =(id) => {
        this.setState(prevState => ({
            contacts:prevState.contacts.filter(contact => contact.id !== id)
        }))

    }


    render() {
        const {filter} =this.state;
        const normalizeFilter=filter.toLowerCase();
        const visibleFilter = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter))
        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm onSubmit ={this.addContact}/>
                <h2>Contacts</h2>
                <Filter value={filter} onChange={this.handleFilter}/>
                <ContactList contacts={visibleFilter} onDelete={this.deleteContact}/>
            </div>
        )
    }
}

export default App;
