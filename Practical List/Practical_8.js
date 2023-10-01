// Create a JavaScript module that fetches data from an API using the fetch()
// function and exports the retrieved data.
// Create an async function getUsers(names), that gets an array of GitHub logins,
// fetches the users from GitHub and returns an array of GitHub users.
// The GitHub url with user information for the given USERNAME is:
// https://api.github.com/users/USERNAME.
// There’s a test example in the sandbox.
// Important details:
//  There should be one fetch request per user.
//  Requests shouldn’t wait for each other. So that the data arrives as soon
// as possible.
//  If any request fails, or if there’s no such user, the function should return
// null in the resulting array.

import fetchData from "./fetchdata.js";

async function main() {
  const username = "21ce114"; 
  const userData = await fetchData(username);

  if (userData) {
    const { login, id, node_id, url } = userData;

    console.log("User Data:");
    console.log(`
      id : ${id}
      login : ${login}
      node_id : ${node_id}
      url : ${url}
    `);
  } else {
    console.log("User not found or request failed.");
  }
}

main();

