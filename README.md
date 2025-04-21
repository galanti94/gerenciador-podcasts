# 🎧 PodcastModel Menager

## Description

A Netflix-style app to centralize video podcast episodes, organizing them by categories such as health, fitness, mindset, and humor. The goal is to offer a fast and intuitive experience to help users find the perfect podcast based on their interests.

## Domain

🎙️ **Video Podcasts**  
📺 Centralization and categorization of episodes

## Features

- 🔍 List podcast episodes by category
- 🗂️ Filter by podcast name
- 🎯 Available categories: `health`, `fitness`, `mindset`, `humor`

## Endpoints

### `GET /episodes`
Returns the list of available episodes.

### `GET /episodes/filter?name=<name>`
Returns episodes filtered by podcast name.

#### Sample Response:
```json
[
    {
        "podcastName": "flow",
        "episode": "CBUM - Flow #319",
        "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg",
        "url": "https://www.youtube.com/watch?v=pQSuQmUfS30",
        "categories": ["health", "bodybuilder"]
    }
]
```

## Project Structure

```
.
├── src
│   ├── app.ts                      # Main server entry point
│   ├── controllers
│   │   └── podcasts-controller.ts  # Listing and filtering logic
│   ├── routes
│   │   └── routes.ts               # API route definitions
│   └── utils
│       └── http-methods.ts         # HTTP method enum
```

## Technologies Used

- TypeScript
- Node.js (no external frameworks)
- Native HTTP module

## How to Run the Project

```bash
# Clone the repository
git clone https://github.com/galanti94/podcast-manager-node-ts-no-frameworks.git

# Navigate to the project folder
cd podcast-manager-node-ts-no-frameworks

# Install dependencies
npm install

# Start the server
npm run start:dev
```

## Next steps
- Add docker container
- Add PostgreSQL database

## Author

Guilherme Roncaratti Galanti  
[LinkedIn](https://www.linkedin.com/in/guilherme-galanti/) • [GitHub](https://github.com/galanti94)