const API_KEY = 'd547a89b-982c-46e2-ac32-74e1b3f3e23a';
const API_TOKEN = 's84hgb56-a9fh-4d84-c6f4-d8kg74h3e37g';

Access key ID: AKIAIOSFODNN7EXAMPLE
Secret access key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

const USERNAME = 'Attacker';
const PASSWORD = 'I@mAttack1ng#273';
const EMAIL_ID = 'attacker@testing.com';

const CREDENTIALS = {
    username: USERNAME,
    password: PASSWORD,
    email: EMAIL_ID
} 

const headers = {
    'API-KEY': API_KEY,
    'API-TOKEN': API_TOKEN
};

fetch('https://example.com', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(CREDENTIALS)
})
.then(response => response.json())
.then(data => {
    // Do something with the data
})
.catch(err => {
    console.error(err);
})


Sample API Keys

bitly - R_a1bc23def456gh78i9j01234k567l8m
github - ghp_0123456789abcdef0123456789abcdef012345
dropbox - 7v0sdjkwj7h4rx9
digitalocean - 0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
heroku - 012345678-9abc-9abc-9abc-0123456789ab
trello - b4c356789d2a1e3f6a7b8c9d0e2f1a3b
virustotal - c1a2b3d4e5f6g7h8i9j0k1l2m3n4o5p6q
google geo location - AIzaSyB39EXAMPLEFw0G6YcXOTKSHI8e0uTO4
