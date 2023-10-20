# Node rest API

# Requirements
1. node 18.17.0
2. docker
3. docker compose

# setup
Follow the steps to run the application locally.

0. create .env file and paste the next variables into it: 
    PORT=8080
    DATABASE_URL=postgresql://postgres:P@ssword@localhost:5432/postgres

1. npm install
2. open a terminal console and navigate to Docker directory and execute docker compose up -d
3. above step creates and configures a postgres container, make sure it is runnig by executing docker ps. The just-play-db contaianer should be running
4. execute npx prisma migrate dev --name init to create the database, tables and constraints
5. execute npx prisma db seed --preview-feature to populate the database with initial data
6. execute npm run dev to start the API
7. use the postman collections that are in postman directory to test the endpoints
