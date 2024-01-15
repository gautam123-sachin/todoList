import React from 'react';
import { shape, func } from 'prop-types';
import { Grid, Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PhoneIcon from '@mui/icons-material/Phone';

import '../styles/main.css';

/**
 * Functional component for rendering a card in the list.
 * 
 * @param {Object} props - The component props.
 * @param {Object} props.task - The task object to display on the card.
 * @param {Function} props.onDelete - The function to call when the delete button is clicked.
 * @param {Function} props.onEdit - The function to call when the edit button is clicked.
 * @param {Function} props.onAddressClick - The function to call when the address is clicked.
 * @returns {JSX.Element} The rendered ListCard component.
 */
const ListCard = ({ task, onDelete, onEdit, onAddressClick }) => {
    // Destructuring task object for easier access to properties
  const { _id, name, isActive, address, email, phone, tags, index, picture } = task;

  /**
   * Returns the image URL if the picture is a File object, otherwise returns null.
   * 
   * @returns {string|null} The image URL or null.
   */
  const getImageUrl = () => {
    if (picture instanceof File) {
      return URL.createObjectURL(picture);
    } else if (typeof picture === 'string') {
      return picture;
    }
    return null;
  };

  return (
   <Grid item xs={12} sm={12} md={12} lg={12} className='grid-container'>
      {/* Card component for displaying task information */}
      <Card raised={true}>
         {/* Card content including header, main content, icons, and tags */}
        <CardContent>
          <div className='card-content'>
            {/* Section for profile picture and active status */}
            <div>
              <img
                src={getImageUrl()}
                alt='profile picture'
                width={50}
                height={50}
                className='card-image'
              />
              <div className='active-icon'>
                <FiberManualRecordIcon color={isActive ? 'success' : 'error'} />
              </div>
            </div>
              {/* Section for text content including name, address, email, and phone */}
            <div>
              <Typography variant='h6' className='card-title'>
                {name}
              </Typography>
              <div className='card-address'>
                <PlaceIcon />
                <Typography
                  variant='body2'
                  className='card-address-text'
                  sx={{ cursor: 'pointer' }}
                  onClick={() => onAddressClick(address)}
                >
                  {address}
                </Typography>
              </div>
              <div className='card-email'>
                <EmailIcon />
                <Typography variant='body2' className='card-email-text'>
                  {email}
                </Typography>
              </div>
              <div className='card-phone'>
                <PhoneIcon />
                <Typography variant='body2' className='card-phone-text'>
                  {phone}
                </Typography>
              </div>
            </div>
              {/* Section for action icons (delete and edit) */}
            <div className='card-icons'>
              <div className="delete-icon-container">
                <IconButton color='secondary' onClick={() => onDelete(index)}>
                  <DeleteIcon />
                </IconButton>
              </div>
              <div className='edit-icon-container'>
                <IconButton color='primary' onClick={() => onEdit(task)}>
                  <EditIcon />
                </IconButton>
              </div>
            </div>
          </div>
           {/* Section for tags associated with the task */}
          <div className='card-tags'>
            {tags?.map((tag, tagIndex) => (
              <div className='tag' key={tagIndex}>
                <span className='tag-text'>{tag}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};

ListCard.propTypes = {
  task: shape({}).isRequired,
  onDelete: func.isRequired,
  onEdit: func.isRequired,
  onAddressClick: func.isRequired,
}

export default ListCard;
