import { ListItem, ListItemButton, } from './ContactListItem.styled';

export const ContactListItem = ({ name, number, id, onDelete }) => {
  return (
    <ListItem>
        <span>
          {name}: {number}
        </span>
        <ListItemButton
          type="button"
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </ListItemButton>
    </ListItem>
  );
};
