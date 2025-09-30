# Setup Instructions for Masaka Town SDA Church Website

## Email Functionality Setup

The contact form uses **Web3Forms** to send emails. Follow these steps to enable email functionality:

### 1. Get Your Web3Forms API Key

1. Visit [https://web3forms.com](https://web3forms.com)
2. Sign up for a free account (no credit card required)
3. Create a new form and get your Access Key
4. The free plan includes:
   - 250 submissions per month
   - Email notifications
   - Spam filtering
   - No backend required

### 2. Add the API Key to Your Project

1. Create a `.env.local` file in the root of your project
2. Add your Web3Forms key:
   \`\`\`
   WEB3FORMS_KEY=your_actual_key_here
   \`\`\`
3. Replace `your_actual_key_here` with the key from Web3Forms

**Important:** This is a server-side only variable (no `NEXT_PUBLIC_` prefix) for security.

### 3. Configure Email Recipient

The contact form sends emails to `jessekyambadde0@gmail.com` for testing. To change this:

1. Open `app/actions/send-email.ts`
2. Find the line: `to_email: 'jessekyambadde0@gmail.com'`
3. Replace with your desired email address (e.g., `info@masakasda.org`)

### 4. Test the Contact Form

1. Fill out the contact form on your website
2. Submit the form
3. Check the configured email inbox for the message
4. You should receive an email with all the form details

---

## Livestream Setup

The website includes YouTube Live integration for streaming worship services.

### 1. Set Up Your YouTube Channel

1. Create a YouTube channel for your church (if you don't have one)
2. Enable live streaming in YouTube Studio
3. Verify your channel (required for live streaming)

### 2. Get Your Livestream Video ID

**Option A: For Scheduled Livestreams**
1. Create a scheduled livestream in YouTube Studio
2. The URL will look like: `https://www.youtube.com/watch?v=VIDEO_ID_HERE`
3. Copy the `VIDEO_ID_HERE` part

**Option B: For Your Channel's Live Page**
1. Go to your channel's live page: `https://www.youtube.com/@YourChannelName/live`
2. When you go live, this URL will automatically show your current livestream

### 3. Update the Website with Your Video ID

**Method 1: Environment Variable (Recommended)**
1. Add to your `.env.local` file:
   \`\`\`
   NEXT_PUBLIC_YOUTUBE_LIVESTREAM_ID=your_video_id_here
   \`\`\`
2. Update the components to use this variable

**Method 2: Direct Update**
1. Open `app/livestream/page.tsx`
2. Find: `youtubeVideoId="jfKfPfyJRdk"`
3. Replace with your video ID

3. Open `components/livestream-embed.tsx`
4. Find: `youtubeVideoId = "jfKfPfyJRdk"`
5. Replace with your video ID

### 4. Customize Livestream Settings

In `components/livestream-embed.tsx`, you can customize:

- **Service Schedule**: Update the times in the "Sabbath Service Schedule" section
- **Live Detection**: The component automatically detects if it's Saturday 8:30 AM - 6:00 PM
- **YouTube Channel Link**: Update `@MasakaTownSDA` with your actual channel handle

### 5. Going Live

When you start your livestream on YouTube:
1. The website will automatically show the "LIVE NOW" indicator (on Saturdays during service hours)
2. Viewers can watch directly on your website
3. They can also click to watch on YouTube for full features (chat, etc.)

---

## Additional Configuration

### Update Church Information

1. **Church Name & Details**: Edit `components/church-layout.tsx`
2. **Service Times**: Update in `app/page.tsx` and `components/sabbath-countdown.tsx`
3. **Contact Information**: Edit `app/contact/page.tsx`
4. **About Us Content**: Edit `app/about/page.tsx`

### Deployment

1. Push your code to GitHub
2. Deploy to Vercel (recommended) or your preferred hosting
3. Add environment variables in your hosting dashboard:
   - `WEB3FORMS_KEY` (server-side only, no NEXT_PUBLIC_ prefix)
   - `NEXT_PUBLIC_YOUTUBE_LIVESTREAM_ID` (optional)

---

## Support

For issues or questions:
- **Web3Forms**: [https://web3forms.com/docs](https://web3forms.com/docs)
- **YouTube Live**: [https://support.google.com/youtube/answer/2474026](https://support.google.com/youtube/answer/2474026)
- **Website Issues**: Contact your web developer

---

## Testing Checklist

- [ ] Contact form sends emails successfully
- [ ] Prayer requests are properly marked in emails
- [ ] Livestream embed loads correctly
- [ ] YouTube link opens in new tab
- [ ] Mobile responsive design works
- [ ] All navigation links work
- [ ] Footer links are correct
