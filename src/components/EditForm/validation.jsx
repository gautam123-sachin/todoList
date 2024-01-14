/**
 * Removes any characters that are not letters or spaces from the given name.
 * @param {string} name - The name to be validated.
 * @returns {string} - The validated name.
 */
export const validateName = (name) => {
    return name.replace(/[^a-zA-Z ]/g, '');
};

/**
 * Removes any characters that are not letters, numbers, or spaces from the given address.
 * @param {string} address - The address to be validated.
 * @returns {string} - The validated address.
 */
export const validateAddress = (address) => {
    return address.replace(/[^a-zA-Z0-9 ]/g, '');
};

/**
 * Validates the format of the given email using a regular expression.
 * @param {string} email - The email to be validated.
 * @returns {string|null} - The validated email if it is in the correct format, or null otherwise.
 */
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? email : null;
};

/**
 * Removes any non-digit characters from the given phone number,
 * ensures it has a minimum length of 10 digits, and formats it as (XXX)-XXX-XXXX.
 * @param {string} phone - The phone number to be validated.
 * @returns {string|null} - The validated phone number if it is valid, or null otherwise.
 */
export const validatePhone = (phone) => {
    phone = phone.replace(/\D/g, '');

    if (phone.length < 10) {
        return null;
    }

    if (phone.length > 10) {
        phone = phone.slice(0, 10);
    }

    phone = `(${phone.slice(0, 3)})-${phone.slice(3, 6)}-${phone.slice(6, 10)}`;

    return phone;
};