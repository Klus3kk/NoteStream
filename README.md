# **NoteStream**

**NoteStream** is an advanced music streaming app, inspired by Spotify, that brings together cutting-edge technologies to deliver a modern, personalized listening experience. The app integrates AI-driven recommendations, real-time lyrics, social sharing, and offline access via PWA. With Docker for containerization and Google Cloud for hosting and file storage, NoteStream is scalable, reliable, and designed to handle modern music streaming needs.

## **Key Features**

- **Music Streaming**: Stream high-quality music tracks, stored on Google Cloud Storage.
- **Playlists & Favorites**: Create, manage, and share playlists and favorite tracks.
- **AI-Powered Recommendations**: Get personalized recommendations using machine learning algorithms with FastAPI.
- **Real-Time Lyrics**: Sing along with real-time lyrics synced to your music.
- **Social Sharing**: Share your playlists and favorite tracks with friends.
- **Offline Mode**: Listen to your music even without an internet connection using Progressive Web App (PWA) technology.
- **Authentication**: Secure login/signup using Auth0 with social login options (Google, Spotify).

## **Technologies Stack**

### **Frontend**

- **Next.js** (with TypeScript): Fast server-side rendering for performance and SEO.
- **Tailwind CSS**: For responsive and scalable styling.
- **React Query**: Efficient data fetching and caching.
- **SWC**: Lightning-fast JavaScript/TypeScript compilation.
- **PWA**: Offline-first experience for mobile and desktop.

### **Backend**

- **FastAPI** (Python): Machine learning and AI recommendation services.
- **Node.js** (with GraphQL): Provides flexible and efficient APIs for music streaming and user interactions.
- **Prisma ORM**: Simplifies interaction with PostgreSQL databases, supporting both Docker and Google Cloud PostgreSQL.

### **Database**

- **PostgreSQL**: Stores user data, playlists, and music metadata.
- **Redis**: Caching for faster query responses.
- **Elasticsearch**: Advanced search for music and metadata.

### **Cloud**

- **Google Cloud**: Used for scalable hosting, with Kubernetes and Docker for orchestration. Also used for storing audio files in Google Cloud Storage.
- **CI/CD**: GitHub Actions for automated testing, building, and deployment to Google Cloud.

---

## **Docker Setup and Commands**

To ensure smooth development and deployment, the **NoteStream** project uses Docker for containerization. All services, including the backend, FastAPI, PostgreSQL, and other components, are containerized to streamline development and ensure consistent environments.

### **Docker Compose Setup**

The `docker-compose.yml` file defines the services required for the project:

```yaml
version: '3'
services:
  backend:
    build: ./backend
    ports:
      - "4000:4000"
    environment:
      DATABASE_URL: postgresql://user:password@db:5432/notestream?sslmode=require
    depends_on:
      - db
    volumes:
      - ./backend:/app
    command: ["npm", "run", "dev"]

  fastapi_service:
    build: ./fastapi_service
    ports:
      - "8000:8000"
    command: ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

  db:
    image: postgres
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: notestream
    ports:
      - "5432:5432"
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:
```

### **Useful Docker Commands**

Here are some useful Docker commands for managing your NoteStream project:

#### **Building and Running Services**

- **Start the services**:

  ```bash
  docker-compose up --build
  ```

  This command builds the Docker images and starts the containers for the backend, FastAPI, and PostgreSQL.

- **Stop the services**:

  ```bash
  docker-compose down
  ```

- **Rebuild and restart containers** (if there are changes in the code):

  ```bash
  docker-compose up --build
  ```

#### **Database Management with PostgreSQL in Docker**

- **Access the PostgreSQL container**:

  ```bash
  docker exec -it <container_name> psql -U <user> -d <db_name>
  ```

  This allows you to connect to the PostgreSQL database inside the container.

- **Check running containers**:

  ```bash
  docker ps
  ```

  Lists all the running containers and their status.

#### **Viewing Logs**

- **View logs for a specific container**:

  ```bash
  docker-compose logs <service_name>
  ```

  This will display the logs for the service (e.g., `backend`, `fastapi_service`, or `db`).

- **View logs for all services**:

  ```bash
  docker-compose logs
  ```

#### **Handling Prisma and PostgreSQL**

- **Run Prisma migrations**:

  ```bash
  npx prisma migrate dev
  ```

  Applies migrations to your PostgreSQL database running in the Docker container.

- **Generate Prisma client**:

  ```bash
  npx prisma generate
  ```

  Generates the Prisma client based on your schema.

---

### **How Docker Works in NoteStream**

- **Backend**: The Node.js backend, responsible for serving the GraphQL API, runs in a Docker container. It interacts with the PostgreSQL database and serves track metadata and user data via GraphQL.
  
- **FastAPI Service**: A separate container runs the FastAPI service, which provides AI-based recommendations for users. This service fetches data from PostgreSQL and uses machine learning models for recommendations.

- **PostgreSQL**: The PostgreSQL database runs in its own container and stores all metadata about users, playlists, and tracks.

- **Google Cloud Storage**: Songs are stored in Google Cloud Storage, and the backend provides URLs to these files, which are then played in the frontend.
