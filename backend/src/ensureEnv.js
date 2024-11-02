const envs = ["MONGODB_URI"];

for (const env of envs) {
  if (!process.env[env]) {
    const message = ' Add " ' + env + ' " in .env before starting server.';
    throw new Error(message);
  }
}
