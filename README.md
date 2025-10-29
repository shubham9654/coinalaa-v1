# Coinlaa.com - Bitcoin Hub

A comprehensive Next.js application that serves as a hub for all Bitcoin-related information, social connections, education, and AI-powered tools.

## 🚀 Features

### Core Features
- **Social Connect**: Connect with Bitcoin enthusiasts worldwide
- **Bitcoin Academy**: Educational content from basics to advanced concepts
- **Job Board**: Bitcoin-related career opportunities
- **Events**: Bitcoin meetups, conferences, and hackathons
- **News**: Latest Bitcoin news and updates
- **Bitcoin GPTs**: AI-powered Bitcoin tools and assistants

### Technical Features
- **Modern Tech Stack**: Next.js 15, TypeScript 5, Tailwind CSS 4
- **Database**: Prisma ORM with SQLite
- **UI Components**: Complete shadcn/ui component library
- **AI Integration**: Z-AI Web Dev SDK for AI-powered features
- **Authentication**: NextAuth.js with Bitcoin wallet support
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with shadcn/ui
- **Database**: Prisma ORM + SQLite
- **Authentication**: NextAuth.js v4
- **AI**: Z-AI Web Dev SDK
- **State Management**: Zustand + TanStack Query
- **Icons**: Lucide React
- **Real-time**: Socket.io

## 📁 Project Structure

```
src/
├── app/
│   ├── api/                 # API routes
│   │   ├── ai-tools/        # AI tools management
│   │   ├── ai-query/        # AI query processing
│   │   ├── auth/            # Authentication endpoints
│   │   └── seed/            # Database seeding
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main landing page
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── auth-button.tsx      # Authentication component
│   └── bitcoin-gpts.tsx     # Bitcoin GPTs interface
├── lib/
│   ├── auth.ts              # NextAuth configuration
│   ├── db.ts                # Prisma client
│   ├── seed.ts              # Database seeding
│   ├── socket.ts            # Socket.io configuration
│   └── utils.ts             # Utility functions
└── hooks/                   # Custom React hooks
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Configure your database URL and any API keys needed.

4. Set up the database:
   ```bash
   npm run db:push
   ```

5. Seed the database with initial data:
   ```bash
   # The seed endpoint is available at /api/seed
   # Or use the "Seed Tools" button in the Bitcoin GPTs section
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📊 Database Schema

The application uses a comprehensive database schema with the following main models:

- **User**: User profiles and authentication
- **Post**: Social media posts
- **Course**: Educational courses and lessons
- **Job**: Job listings and applications
- **Event**: Events and registrations
- **NewsArticle**: News content
- **AITool**: AI-powered Bitcoin tools
- **AIQuery**: User interactions with AI tools

## 🤖 AI Features

The Bitcoin GPTs section includes several AI-powered tools:

1. **Bitcoin Price Predictor**: Analyzes trends and predicts price movements
2. **Technical Analysis Assistant**: Provides comprehensive technical analysis
3. **Bitcoin Educator**: Explains concepts in simple terms
4. **Security Advisor**: Offers security best practices
5. **Mining Consultant**: Guidance on Bitcoin mining operations
6. **Lightning Network Expert**: Specialized Lightning Network knowledge

## 🎨 UI Components

The application uses a complete set of shadcn/ui components including:
- Cards, Buttons, Inputs, Textareas
- Navigation, Tabs, Dropdowns
- Modals, Dialogs, Alerts
- Forms, Tables, Pagination
- And many more...

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first design approach
- Touch-friendly interactions
- Optimized layouts for all screen sizes
- Smooth animations and transitions

## 🔐 Authentication

The authentication system supports:
- Email/password authentication
- Bitcoin wallet integration (planned)
- User profiles with Bitcoin addresses
- Session management

## 🚀 Deployment

The application is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- Railway
- Digital Ocean

## 📈 Performance

- Optimized for performance with Next.js 15
- Efficient database queries with Prisma
- Lazy loading and code splitting
- Optimized images and assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Bitcoin community for inspiration
- Next.js team for the amazing framework
- shadcn/ui for the beautiful component library
- Z-AI for the AI integration capabilities

---

Built with ❤️ for the Bitcoin community