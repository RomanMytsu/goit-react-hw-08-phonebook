import { ListItemButton, ListItemWrapper } from './ContactListItem.styled';

export const ContactListItem = ({ name, number, id, onDelete }) => {
  return (
    <li>
      <ListItemWrapper>
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
      </ListItemWrapper>
    </li>
  );
};
