// Import the faker library
import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js';

// Create a function that generates random user data using the faker library
export const userData = () => ({
    "email": faker.internet.email, // Generate a random email address
    "username": faker.name.firstName, // Generate a random first name
    "password": "m38rmF$", // Use a static password
    "name": {
      "firstname": faker.name.firstName(), // Generate a random first name
      "lastname": "labib" // Use a static last name
    },
    "address": {
      "city": faker.address.city(), // Generate a random city
      "street": "New York", // Use a static street name
      "number": 3, // Use a static building number
      "zipcode": faker.address.zipCode(), // Generate a random zip code
      "geolocation": {
        "lat": faker.address.latitude(), // Generate a random latitude
        "long": faker.address.longitude() // Generate a random longitude
      }
    },
    "phone": "1-570-236-7033" // Use a static phone number
});
