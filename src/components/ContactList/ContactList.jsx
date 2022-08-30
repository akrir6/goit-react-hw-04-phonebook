import PropTypes from "prop-types";
import { ContactCard } from "components/ContactCard/ContactCard";
import { List, ListItem } from "./ContactList.styled";

export const ContactList = ({ contacts, onDeleteClick }) => {
    return (
        <List>
            {contacts.map(({ id, name, number })=>(
            <ListItem key={id}>
                <ContactCard id={id} name={name} number={number} onDeleteClick={onDeleteClick} />
            </ListItem>
            ))}
        </List>
    )

}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })).isRequired,
    onDeleteClick: PropTypes.func.isRequired,
}