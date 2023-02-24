// Import the necessary k6 and faker libraries
import http from 'k6/http';
import { check } from 'k6';
import { userData } from './payload.js'; //Sometimes you need to give the expact path for the file


// Define the stages for the test
export let options = {
    stages: [
        // Ramp up to 1 VUs for 5 second
        { duration: "5s", target: 1},
};

// Set the base URL of the API
const baseUrl = 'https://fakestoreapi.com/users';

// The main function that will be executed for each VU (virtual user)
export default function() {
	
	// Create a random user using the userData function from the payload.js file
	const message = userData();
	
	// Convert the user data to JSON format
	const data = JSON.stringify(message);

	// Set the headers for the POST request
	let headers = {
		'Content-Type': 'application/json'
	}

	// Send the POST request to the API with the generated user data and headers
	let response = http.post(`${baseUrl}`, data, {
		headers: headers
	});

	// Check the response status code and response time using the k6 check function
	check(response, {
		// The status code should be 200
		'status is 200': (r) => r.status === 200,
        // The response time should be less than 200ms
        'response time < 200ms': (r) => r.timings.duration < 200
	});

	// If the response status code is not 200, print the response JSON to the console
	if (response.status !== 200) {
		console.log(response.json())
	}
}
