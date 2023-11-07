import apiService from './apiService.js';

const userModel = {
    
        validateName: function (name) {
          // Check if the name is not empty
          if (name.trim() === '') {
            return false;
          }
      
          // Check if the name doesn't exceed 256 characters
          if (name.length > 256) {
            return false;
          }
      
          // Use a regular expression to validate the name format
          const nameRegex = /^[a-zA-Z\s'-]+$/;
          return nameRegex.test(name);
        },
      
        validateEmail: function (email) {
          // Regular expressions for different parts of the email
          const usernameRegex = /^[a-zA-Z0-9._-]+/;
          const domainRegex = /^[a-zA-Z0-9.-]+/;
          const tldRegex = /^[a-zA-Z]{2,4}$/;
      
          // Use regular expressions to validate the email format
          const validUsername = usernameRegex.test(email.split('@')[0]);
          const validDomain = domainRegex.test(email.split('@')[1].split('.')[0]);
          const validTLD = tldRegex.test(email.split('.')[1]);
      
          return validUsername && validDomain && validTLD;
        },

        validateAddress: function (address) {
            // Check if address doesn't exceed 256 characters
            if (address.length > 256) {
              return false;
            }
        
            return true;
        },

        validateZipCode: function (zipCode) {
            // Use a regular expression to validate a 5-digit U.S. zip code
            const zipCodeRegex = /^\d{5}$/;
            return zipCodeRegex.test(zipCode);
        }
             

};
function init() {
  const submitButton = document.getElementById('submit');

  submitButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the input values from the form
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const street = document.getElementById('street').value;
    const street2 = document.getElementById('street2').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;

    // Validate input fields using userModel functions
    const isFirstNameValid = userModel.validateName(firstName);
    const isLastNameValid = userModel.validateName(lastName);
    const isUsernameValid = userModel.validateName(username);
    const isEmailValid = userModel.validateEmail(email);
    const isStreetValid = userModel.validateAddress(street);
    const isStreet2Valid = userModel.validateAddress(street2);
    const isCityValid = userModel.validateAddress(city);
    const isStateValid = userModel.validateAddress(state);
    const isZipValid = userModel.validateZipCode(zip);
    // You can call other validation functions for different fields here

    if (isFirstNameValid && isLastNameValid && isUsernameValid && isEmailValid && 
        isStreetValid && isStreet2Valid && isCityValid && isStateValid && isZipValid ) {
      // If all input fields are valid, you can submit the form data to the server
      apiService.submit({
        firstName,
        lastName,
        username,
        email,
        street,
        street2,
        city,
        state,
        zip,
      });
    } else {
      // Handle validation errors, show error messages to the user
      // You can display error messages near the respective input fields
    }
  });
}

window.onload = init;
export default userModel