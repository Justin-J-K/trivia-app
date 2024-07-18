# Trivia App in Next.js and Django

This project is a trivia app that combines a Next.js frontend with a Django backend. The backend is connected to a SQLite database on the EC2 instance in this demo. The app allows users to answer trivia questions and submit their scores, which can then be viewed on a leaderboard.

## Endpoints

* `/api/top`: Retrieves the top ten players
* `/api/add`: Adds a player's score and name to the database