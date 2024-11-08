const baseApiUrl = "https://672dde4dfd89797156440a59.mockapi.io/api/v1/user"; // Base API URL for users
const output = document.getElementById("output");

async function createUser() {
  const name = document.getElementById("userName").value;
  const email = document.getElementById("userEmail").value;

  const response = await fetch(baseApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  });

  const data = await response.json();
  output.innerHTML = `<p>User Created: ${JSON.stringify(data)}</p>`;
}

async function readUser() {
  const userId = document.getElementById("userId").value;

  const response = await fetch(`${baseApiUrl}/${userId}`);
  if (response.ok) {
    const data = await response.json();
    output.innerHTML = `<p>User Details: ${JSON.stringify(data)}</p>`;
  } else {
    output.innerHTML = `<p>User not found</p>`;
  }
}

async function updateUser() {
  const userId = document.getElementById("userId").value;
  const name = document.getElementById("userName").value;
  const email = document.getElementById("userEmail").value;

  const response = await fetch(`${baseApiUrl}/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  });

  const data = await response.json();
  output.innerHTML = `<p>User Updated: ${JSON.stringify(data)}</p>`;
}

async function deleteUser() {
  const userId = document.getElementById("userId").value;

  const response = await fetch(`${baseApiUrl}/${userId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    output.innerHTML = `<p>User Deleted</p>`;
  } else {
    output.innerHTML = `<p>Failed to delete user</p>`;
  }
}
