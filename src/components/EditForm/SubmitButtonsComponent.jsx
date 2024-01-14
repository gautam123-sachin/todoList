import React from 'react';
import { func } from 'prop-types';
import { Button } from '@mui/material';

/**
 * SubmitButtonsComponent is a React component that renders two buttons for submitting and canceling.
 * @param {Object} props - The component props.
 * @param {function} props.onSubmit - The function to be called when the submit button is clicked.
 * @param {function} props.onCancel - The function to be called when the cancel button is clicked.
 * @returns {JSX.Element} A JSX element representing the SubmitButtonsComponent.
 */
const SubmitButtonsComponent = ({ onSubmit, onCancel }) => {
    return (
        <div className='submit-button'>
            {/* Submit button */}
            <Button
                variant="contained"
                fullWidth={true}
                onClick={onSubmit}
                className='submit-btn'
            >
                Submit
            </Button>
            {/* Cancel button */}
            <Button
                variant="contained"
                fullWidth={true}
                onClick={onCancel}
            >
                Cancel
            </Button>
        </div>
    );
};

SubmitButtonsComponent.propTypes = {
    onSubmit: func.isRequired,
    onCancel: func.isRequired
}

export default SubmitButtonsComponent;