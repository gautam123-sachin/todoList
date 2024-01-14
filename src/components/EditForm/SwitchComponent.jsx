import React from 'react';
import { bool, func } from 'prop-types';
import { Typography, Switch } from '@mui/material';

/**
 * A component that renders a switch with a label for status.
 * @param {boolean} checked - The current state of the switch.
 * @param {function} onChange - The function to call when the switch state changes.
 * @returns {JSX.Element} - The rendered switch component.
 */
const SwitchComponent = ({ checked, onChange }) => {
    return (
        <div className='status'>
            {/* Label for the switch */}
            <Typography variant="body2">Status</Typography>
            {/* The switch component */}
            <Switch
                checked={checked}
                onChange={onChange}
                inputProps={{ 'aria-label': 'controlled' }}
                className='switch'
            />
        </div>
    );
};
SwitchComponent.propTypes = {
    checked: bool.isRequired,
    onChange: func.isRequired
}

export default SwitchComponent;