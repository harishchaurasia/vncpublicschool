export default function handler(req, res) {
  // This is sample data - you can replace it with a database or file-based storage
  const videos = [
    {
      "type": "youtube",
      "videoId": "https://www.youtube.com/watch?v=JsSOw1NrvuI",
      "title": "Engaging Classroom Activities for Middle School Students",
      "description": "A look back at our interactive classroom sessions, designed to enhance student engagement, creativity, and participation through fun learning activities."
    },
    {
      "type": "youtube",
      "videoId": "https://youtu.be/L5F9rj5tMB0",
      "title": "Memorable Zoo Trip – Exploring Wildlife in Gorakhpur",
      "description": "Highlights from our exciting visit to Gorakhpur Zoo, where students experienced wildlife up close and gained valuable insights into animal conservation."
    }
    
      // {
      //   type: 'local',
      //   filename: 'independence-day.mp4',
      //   thumbnail: '/thumbnails/independence-day.jpg',  // Optional thumbnail
      //   title: "Independence Day Celebrations",
      //   description: "Flag hoisting and cultural program"
      // }
  ];


  res.status(200).json(videos);
}

/* How to add videos:

1. For YouTube videos:
   - Upload video to YouTube
   - Add entry with:
     type: 'youtube'
     videoId: full YouTube URL (e.g., https://www.youtube.com/watch?v=...)
     title: video title
     description: video description

2. For local videos:
   - Place MP4 file in public/videos/ directory
   - Add entry with:
     type: 'local'
     filename: name of the MP4 file
     thumbnail: (optional) path to thumbnail image
     title: video title
     description: video description

Note: Thumbnails are optional for both types:
- YouTube videos will use YouTube's default thumbnail
- Local videos will use the first frame of the video if no thumbnail is provided
*/ 