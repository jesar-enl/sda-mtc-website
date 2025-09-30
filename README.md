# SDA Masaka Town Church website

A modern responsive website for Masaka Town Seventh-day Adventist Church, built with NExt.js, Tailwind CSS, and shadcn/ui. This site provides information about the church, its miistries, events resources, and ways to give, all while offering a smooth user experience across devices.

## Table of Contents

1. Features
2. Tech Stack
3. Folder Structure
4. Installation
5. Usage
6. Deployment
7. Contributing
8. License

### Features

- Fully responsive layout with fixed, semi-transparent, blurred top navigation bar.
- Desktop and mobile friendly navigation menu with hamburger toggle.
- Dark mode toggle for user preference.
- Dynamic current year in the footer.
- Quick links to Sermons, Ministries, Events, Resources, Gallery, Contact, Give
- Right-sided bar to represent the Seventh-day Sabbath
- External links to SDA resources like Hope Channel International

### Tech Stack

> Next.js
> Tailwind CSS 3.x
> shadcn/ui
> Lucide React
> React

### Installation

1. Clone the repository:
   \`\`\`
   git clone https://github.com/yourusername/masaka-town-sda.git
   cd masaka-town-sda
   \`\`\`
2. Intall dependencies:
   \`\`\`
   npm install
   # or
   pnpm install
   \`\`\`
3. Start the developmpent server:
   \`\`\`
   npm run dev
   # or
   pnpm dev
   \`\`\`
4. Open [http://localhost:3000](http://localhost:3000) in your favorite browser.

### Usage

- Update navigation links in ```app/layout.tsx``` under the ```navigation``` tray.
- Replace the logos or images in the ```public/``` folder.
- Footer automaticall uses ```new Date().getFullYear()``` for dynamic year.
- Add new pages under ```app/``` for Sermons Ministries, Events Resource, Gallery and Contact.

### Contributing

1. Fork the repository.
2. Create a new branch: ```git checkout -b feature/your-feature```.
3. Make changes and commit: ```git commit -m "Add feature"```.
4. Push to branch: ```git push origin feature/your-feature```.
5. Open a pull request.

### License

This project is open source under the MIT License.
