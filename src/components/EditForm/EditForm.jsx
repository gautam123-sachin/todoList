import React, { useState, useEffect } from 'react';
import { shape, func } from 'prop-types';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import TextFieldComponent from './TextFieldComponent';
import FileUploaderComponent from './FileUploaderComponent';
import SwitchComponent from './SwitchComponent';
import SubmitButtonsComponent from './SubmitButtonsComponent';
import { validateName, validateAddress, validateEmail, validatePhone } from './validation';

import '../../styles/main.css';

// Define the form fields with labels and corresponding validators
const fields = [
    { label: 'Name', validator: validateName },
    { label: 'Address', validator: validateAddress },
    { label: 'Email', validator: validateEmail },
    { label: 'Phone', validator: validatePhone },
];

/**
 * EditForm component that allows users to edit a task.
 * @param {Object} props - The component props.
 * @param {Object} props.task - The task being edited.
 * @param {Function} props.onSubmit - The function to handle form submission.
 * @param {Function} props.onCancel - The function to handle form cancellation.
 * @returns {JSX.Element} - The rendered component.
 */
const EditForm = ({ task, onSubmit, onCancel }) => {
    // Initial state and variables
    const initialTask = { ...task };
    const [editedTask, setEditedTask] = useState({});
    const [nameError, setNameError] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [checked, setChecked] = useState(initialTask.isActive);

    /**
    * Handle file input change.
    * @param {Event} event - The file input change event.
    */
    const handleFileInputChange = (event) => {
        const newSelectedFile = event.target.files[0];
        setSelectedFile(newSelectedFile);
        setEditedTask((prevTask) => ({
            ...prevTask,
            picture: newSelectedFile,
        }));
    };


    /**
     *  Handle switch change
     */
    const handleChange = () => {
        setChecked((prevChecked) => !prevChecked);
        setEditedTask((prevTask) => ({
            ...prevTask,
            isActive: !checked,
        }));
    };

    /**
    * Handle text field change with validation.
    * @param {Event} event - The text field change event.
    * @param {string} field - The field being changed.
    */
    const handleTextFieldChange = (event, field) => {
        let newValue = event.target.value.trim();

        // Find the corresponding validator for the field
        const validator = fields.find(f => f.label.toLowerCase() === field)?.validator;

        // Apply the validator if available
        if (validator) {
            newValue = validator(newValue);
        }

        // Update the edited task
        setEditedTask((prevTask) => ({
            ...prevTask,
            [field]: newValue,
        }));
    };


    /**
     * UseEffect to update state when the task prop changes.
     */
    useEffect(() => {
        setEditedTask({ ...initialTask });
        setChecked(task.isActive);
        setSelectedFile(task.picture);
    }, [task]);

    /**
    * Function to handle form submission.
    */
    const handleSubmit = () => {
        const { _id } = initialTask;

        // Check for required fields and display error if not filled
        if (!editedTask.name || !editedTask.address || !editedTask.email || !editedTask.phone) {
            setNameError(true);
            return;
        }

        // Submit the form data
        onSubmit({ _id, ...editedTask, isActive: checked, picture: selectedFile });
    };

    /**
    * Function to handle form cancellation.
    */
    const handleCancel = () => {
        onCancel();
    };

    return (
        <Grid container spacing={2} className='edit-form-container'>
            <Grid item xs={12} sm={12} md={12} lg={12} className='edit-grid'>
                <Card raised={true} className='edit-card-container'>
                    <CardContent>
                        <h6 className='edit-task-title'>Edit Task</h6>
                        <span className="edit-task-sub-title">
                            Example form fields, replace with your actual form fields
                        </span>
                        <div className='card-text-field'>
                            {/* Render text fields based on the fields array */}
                            {fields.map((field, index) => (
                                editedTask[field.label.toLowerCase()] !== undefined && (
                                    <TextFieldComponent
                                        key={index}
                                        field={field}
                                        value={editedTask[field.label.toLowerCase()]}
                                        onChange={(event) => handleTextFieldChange(event, field.label.toLowerCase())}
                                    />
                                )
                            ))}
                            <Typography variant="body2">Upload image</Typography>
                            {/* Render file uploader component */}
                            <FileUploaderComponent
                                pic={initialTask.picture}
                                selectedFile={selectedFile}
                                setSelectedFile={setSelectedFile}
                                handleFileInputChange={handleFileInputChange}
                            />
                            {/* Render switch component */}
                            <SwitchComponent
                                checked={checked}
                                onChange={handleChange}
                            />
                            {/* Display error message if nameError is true */}
                            {nameError && (
                                <Typography variant="body2" color="error">Please fill in all fields</Typography>
                            )}
                            {/* Render submit and cancel buttons */}
                            <SubmitButtonsComponent
                                onSubmit={handleSubmit}
                                onCancel={handleCancel}
                            />
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};
EditForm.propTypes = {
    task: shape({}).isRequired,
    onSubmit: func.isRequired,
    onCancel: func.isRequired,
}

export default EditForm;
