import PropTypes from "prop-types";
import { Text, Button } from "./ContactCard.styled";

export const ContactCard = ({ id, name, number, onDeleteClick }) => {
    return (
        <>
            <Text>{name}</Text>
            <Text>{number}</Text>
            <Button type="button" onClick={()=>onDeleteClick(id)}>Delete</Button>
        </>
    )
}

ContactCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
}