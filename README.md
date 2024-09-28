# NoteStream
**NoteStream** is a modern music streaming application, inspired by Spotify, that utilizes advanced web technologies to provide a seamless and feature-rich user experience. Built with **Next.js** for a responsive and scalable frontend, the app integrates **AI/ML**-powered recommendations using **FastAPI**, handles music streaming and user data with **Node.js**, **GraphQL**, and **Prisma**, and is hosted on **Google Cloud**. Authenticated via **Auth0**, users can create and share playlists, explore personalized recommendations, and stream their favorite tracks—both online and offline.

## Features Breakdown:

1. **User Authentication (Auth0)**:
   - **Login/Signup**: Users can sign up or log in via social accounts (Google, Facebook) or email/password.
   - **JWT (JSON Web Tokens)**: Securely handle user sessions and pass authentication tokens to the backend.

2. **Music Streaming**:
   - **Track Playback**: Use **HLS** for streaming tracks stored on Google Cloud.
   - **Play/Pause Controls**: Basic controls for playing, pausing, and skipping tracks.
   - **Track Buffering**: Show buffering status when streaming tracks with poor internet.

3. **Playlists & Favorites**:
   - **Create, Edit, Delete Playlists**: Allow users to manage personal playlists.
   - **Favorite Tracks**: Users can mark tracks as favorites for easy access.
   - **Collaborative Playlists** (Optional): Share playlists with friends for collaboration.

4. **Recommendations (AI/ML via FastAPI)**:
   - **Personalized Recommendations**: Use collaborative filtering or content-based filtering models.
   - **Mood-Based Recommendations**: Suggest tracks based on the user’s current mood or activity.
   - **Trending Songs**: Show popular or trending tracks in the app.

5. **Real-time Lyrics & Metadata**:
   - **Lyrics Display**: Use services like **Musixmatch API** to display real-time lyrics synced with songs.
   - **Track Metadata**: Display track information (artist, album, release year) on the playback screen.

6. **Social Sharing**:
   - **Share Tracks/Playlists**: Enable users to share links to tracks or playlists on social media.
   - **Embed Playlists**: Generate embeddable playlist widgets for other websites.

7. **Offline Playback**:
   - **Download Tracks**: Allow users to download songs for offline playback.
   - **Track Encryption**: Ensure that downloaded songs are encrypted and cannot be accessed outside the app.
   - **Offline Playlist Management**: Users can create and manage playlists offline.

8. **PWA (Progressive Web App)**:
   - **Installable App**: Users can install NoteStream as a PWA on their devices.
   - **Offline Support**: Provide limited functionality offline using **service workers** (playlists and favorites).
   - **Push Notifications**: Notify users of new tracks or recommendations.
