import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js';


export const userData = () => ({
    "email": faker.internet.email,
    "username": faker.name.firstName,
    "password": "m38rmF$",
    "name": {
      "firstname": faker.name.firstName(),
      "lastname": "labib"
    },
    "address": {
      "city": faker.address.city(),
      "street": "New York",
      "number": 3,
      "zipcode": faker.address.zipCode(),
      "geolocation": {
        "lat": faker.address.latitude() ,
        "long": faker.address.longitude() 
      }
    },
    "phone": "1-570-236-7033"
  });