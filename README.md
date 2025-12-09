# 🤖 AI Debate App

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Hono](https://img.shields.io/badge/Hono-4.10.7-FF6B6B?style=for-the-badge&logo=hono&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-Latest-FBF0DF?style=for-the-badge&logo=bun&logoColor=black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Latest-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-7.1.0-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

---

## 📖 About

**AI Debate App** is a full-stack web application that enables AI personalities to engage in debates with each other. Users can create accounts, watch AI personalities debate various topics, save chat sessions, and generate summaries of debates.

### ✨ Key Features

- 🔐 **User Authentication** - Secure JWT-based authentication system
- 🤖 **AI Personalities** - Multiple AI personalities that can debate each other
- 💬 **Chat System** - Real-time chat interface for AI debates
- 📝 **Summarization** - Generate and save summaries of debate sessions
- 🎨 **Modern UI** - Beautiful, responsive interface built with Next.js and Tailwind CSS
- 🔒 **Secure** - Password hashing with bcryptjs and session management
- ✅ **Type-Safe** - Full TypeScript support with Zod validation

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 16.0.7](https://nextjs.org/) - React framework for production
- **UI Library**: [React 19.2.0](https://react.dev/) - Modern React with Server Components
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/) - Utility-first CSS framework
- **Markdown**: [react-markdown](https://github.com/remarkjs/react-markdown) - Markdown rendering
- **Language**: [TypeScript 5.0](https://www.typescriptlang.org/) - Type-safe JavaScript

### Backend
- **Framework**: [Hono 4.10.7](https://hono.dev/) - Ultrafast web framework
- **Runtime**: [Bun](https://bun.sh/) - Fast JavaScript runtime
- **Database**: [PostgreSQL](https://www.postgresql.org/) - Powerful relational database
- **ORM**: [Prisma 7.1.0](https://www.prisma.io/) - Next-generation ORM
- **Validation**: [Zod 4.1.13](https://zod.dev/) - TypeScript-first schema validation
- **Security**: 
  - [bcryptjs](https://www.npmjs.com/package/bcryptjs) - Password hashing
  - JWT - Token-based authentication

### Development Tools
- **Package Manager**: Bun
- **Linting**: ESLint
- **Code Formatting**: Prettier with Tailwind CSS plugin

---

## 📁 Project Structure

```
AI-Debate-App/
├── client/                 # Next.js frontend application
│   ├── app/               # Next.js App Router
│   │   ├── page.tsx      # Home page
│   │   ├── layout.tsx    # Root layout
│   │   └── globals.css   # Global styles
│   ├── public/           # Static assets
│   └── package.json      # Frontend dependencies
│
├── server/                # Hono backend application
│   ├── src/
│   │   ├── modules/       # Feature modules
│   │   │   ├── auth/     # Authentication module
│   │   │   └── user/     # User management module
│   │   ├── middleware/   # Express middleware
│   │   │   ├── auth.middleware.ts
│   │   │   └── logger.middleware.ts
│   │   ├── db/           # Database client and generated Prisma
│   │   ├── utils/        # Utility functions
│   │   └── index.ts      # Application entry point
│   ├── prisma/
│   │   ├── schema.prisma # Database schema
│   │   └── migrations/   # Database migrations
│   └── package.json      # Backend dependencies
│
└── shared/                # Shared types and utilities
    └── types/            # TypeScript type definitions
        ├── auth.types.ts
        ├── user.types.ts
        └── base.types.ts
```

---

## 🗄️ Database Schema

The application uses PostgreSQL with Prisma ORM. Key models include:

- **User** - User accounts with authentication
- **Personality** - AI personalities for debates
- **Chats** - Debate chat sessions between AI personalities
- **Content** - Chat messages and content
- **Summerization** - Saved debate summaries
- **Session** - User session management

---

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your system
- PostgreSQL database running
- Node.js 20+ (if not using Bun)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AI-Debate-App
   ```

2. **Install root dependencies**
   ```bash
   bun install
   ```

3. **Install client dependencies**
   ```bash
   cd client
   bun install
   ```

4. **Install server dependencies**
   ```bash
   cd ../server
   bun install
   ```

5. **Set up environment variables**
   
   Create a `.env` file in the `server/` directory:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/ai_debate_app"
   JWT_SECRET="your-secret-key"
   JWT_EXPIRES_IN="7d"
   ```

6. **Run database migrations**
   ```bash
   cd server
   bunx prisma migrate dev
   ```

7. **Generate Prisma client**
   ```bash
   bunx prisma generate
   ```

### Running the Application

**Start the backend server:**
```bash
cd server
bun run dev
```

**Start the frontend client:**
```bash
cd client
bun run dev
```

The application will be available at:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:3001` (or your configured port)

---

## 📝 Available Scripts

### Client
- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint

### Server
- `bun run dev` - Start development server with watch mode

---

## 🔐 Authentication

The application uses JWT-based authentication:

- **Register**: Create a new user account
- **Login**: Authenticate and receive a JWT token
- **Protected Routes**: User routes require authentication middleware
- **Session Management**: Tokens stored in cookies with expiration

---

## 🎯 API Endpoints

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user
- `POST /auth/logout` - Logout user

### User
- `GET /user` - Get current user (protected)
- `PUT /user` - Update user (protected)

---

## 🛡️ Security Features

- ✅ Password hashing with bcryptjs
- ✅ JWT token-based authentication
- ✅ Session management
- ✅ Input validation with Zod
- ✅ Type-safe API with TypeScript
- ✅ Soft deletion support

---

## 📦 Dependencies

### Frontend
- `next` - Next.js framework
- `react` & `react-dom` - React library
- `react-markdown` - Markdown rendering
- `tailwindcss` - CSS framework

### Backend
- `hono` - Web framework
- `@prisma/client` - Prisma ORM client
- `zod` - Schema validation
- `bcryptjs` - Password hashing
- `@hono/zod-validator` - Hono Zod integration

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Built with ❤️ using modern web technologies

---

<div align="center">

**Made with Next.js, Hono, and Bun** ⚡

</div>

