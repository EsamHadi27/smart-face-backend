const bcrypt = require('bcryptjs');

// const password = '111111';
// const hash = '$2a$06$q6K4UKGkNnXINCmwKKG7UuOMi6RcnzRtgGLERSMbHQmCDLVdOSdiu';

// const isValid = bcrypt.compareSync(password, hash);
// console.log(isValid ? 'Password is correct' : 'Password is wrong');

const password = 'NewPass12345'; NewPass12345
const hash = '$2b$10$em12VYgcyzHD0f5631kqXusafzLY6F/zbXC2gjCXdHCAtJ7vwQGcC';

const isValid = bcrypt.compareSync(password, hash);
console.log(isValid ? 'Password is correct' : 'Password is wrong');

// heroku security key = 'Security Key #1'