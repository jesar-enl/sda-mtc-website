# Livestream Setup Guide

## How to Update Video IDs

### When Going Live
1. Open `app/livestream/page.tsx`
2. Find the `LivestreamEmbed` component
3. Update the `youtubeVideoId` prop with your live stream video ID
4. Example: `youtubeVideoId="YOUR_LIVE_STREAM_ID"`

### When Not Live (Show Archived Video)
1. Open `app/livestream/page.tsx`
2. Update the `archivedVideoId` prop with your most recent sermon video ID
3. Example: `archivedVideoId="YOUR_RECENT_SERMON_ID"`

### Finding Your YouTube Video ID
- For a YouTube URL like: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- The video ID is: `dQw4w9WgXcQ` (everything after `v=`)

### Updating Recent Sermons
1. Open `app/livestream/page.tsx`
2. Find the `recentSermons` array
3. Update each sermon object with:
   - `id`: YouTube video ID
   - `title`: Sermon title
   - `date`: Service date
   - `speaker`: Pastor/speaker name

## Automatic Live Detection
The system automatically detects if it's Saturday between 8:30 AM - 6:00 PM EAT and shows:
- **Live indicator** when streaming
- **Archived video notice** when not live

## Tips
- Always update the `archivedVideoId` after each service with the latest sermon
- Keep the `recentSermons` array updated with your 3 most recent services
- Test the video IDs by visiting `https://www.youtube.com/watch?v=YOUR_VIDEO_ID`
