import http from 'k6/http';
import { check } from 'k6';
import { userData } from '///Users/farhanlabibbrinto/Documents/k6-faker/payload.js';


// Set the base URL of the API
const baseUrl = 'https://fakestoreapi.com/users';

// The main function that will be executed for each VU
export default function() {
	//Create a Random User
	const message = userData();
	const data = JSON.stringify(message);

	let headers = {
		'Content-Type': 'application/json'
	}

	let response = http.post(`${baseUrl}`, data, {
		headers: headers
	});

	check(response, {
		// The status code should be 200
		'status is 200': (r) => r.status === 200,
        // The response time should be less than 200ms
        'response time < 200ms': (r) => r.timings.duration < 200
	});


	// If the status code is not 200, log the request body

	if (response.status !== 500) {
		console.log(response.json())
	}

}

//command =  k6 run --logformat raw sample.js --console-output=./test.csv  

// npm test --logformat raw sample.js --console-output=./test.csv