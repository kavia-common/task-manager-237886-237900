# Task Manager (Todo App)

## Overview

This repository contains a web-based Todo application. The primary user experience is a React frontend that lets users create tasks, view their list, mark tasks as completed, and delete tasks.

The frontend container is `todo_app_frontend` and is intended to run in preview on port `3000`.

## Features

The Todo app supports the following core features:

### Add tasks

Users can create a new task using the input at the top of the page.

### View tasks

Users can see the current list of tasks in the main content area.

### Mark tasks complete

Users can mark a task as completed to track progress.

### Delete tasks

Users can remove tasks from the list when they are no longer needed.

## Frontend setup and run (React preview)

### Prerequisites

You need a Node.js + npm environment available.

### Install dependencies

From the frontend container directory:

```bash
cd todo_app_frontend
npm install
```

### Run the development server (preview)

From the same directory:

```bash
npm start
```

The preview is expected to be available on:

- http://localhost:3000

If you are using an environment where the preview port is managed for you, ensure it is mapped to port `3000` for the React app.

## Environment variables

The frontend uses environment variables prefixed with `REACT_APP_` (Create React App convention). The following keys are defined for the container:

### Backend / API configuration

`REACT_APP_API_BASE` configures the base URL (or base path) used by the frontend when calling the API.

`REACT_APP_BACKEND_URL` can be used to point the frontend at the backend service (for example, when the API is on a different host).

`REACT_APP_WS_URL` can be used to configure a WebSocket endpoint if the UI supports realtime updates.

### Frontend URL / runtime settings

`REACT_APP_FRONTEND_URL` is intended to represent the externally reachable URL of the frontend.

`REACT_APP_PORT` is intended to represent the port the frontend should run on (the preview for this project is expected to use port 3000).

`REACT_APP_NODE_ENV` indicates the runtime environment (for example development or production).

### Logging, health checks, and flags

`REACT_APP_LOG_LEVEL` controls frontend logging verbosity when implemented.

`REACT_APP_HEALTHCHECK_PATH` can be used to configure a health check path when relevant.

`REACT_APP_FEATURE_FLAGS` provides a mechanism to enable or disable frontend features via configuration.

`REACT_APP_EXPERIMENTS_ENABLED` can be used to enable experimental features.

### Tooling-related toggles

`REACT_APP_NEXT_TELEMETRY_DISABLED` disables telemetry where applicable in the environment.

`REACT_APP_ENABLE_SOURCE_MAPS` controls whether source maps are enabled.

`REACT_APP_TRUST_PROXY` is intended for environments where requests traverse a proxy and trust settings are needed.

## UI style notes

The intended UI style is modern and minimalistic with a light theme. The accent colors are:

- Primary accent: `#3b82f6`
- Success/accent: `#06b6d4`
- Background: `#f9fafb`
