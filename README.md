# Personal Finance Tracker

A modern, full-stack personal finance management application built with Next.js 15, designed to help users track their income, expenses, and financial goals with beautiful visualizations and comprehensive analytics.

## 📋 About

This Personal Finance Tracker is a comprehensive solution for individuals looking to take control of their financial life. The application allows users to:

- **Track Multiple Accounts**: Manage checking, savings, credit cards, and investment accounts in one place
- **Categorize Transactions**: Organize income and expenses with custom categories for better insights
- **Visualize Financial Data**: Interactive charts and graphs provide clear spending patterns and trends
- **Import & Export Data**: Bulk upload transactions via CSV files for easy data migration
- **Secure & Private**: Each user's financial data is completely isolated and protected with modern authentication

Built with modern web technologies, this application provides a seamless experience across all devices while maintaining bank-level security standards. Whether you're budgeting, tracking expenses, or planning for the future, this tool helps you make informed financial decisions.

## 🌐 Live Demo

🚀 **[View Live Application](https://personal-finance-tracker-gilt.vercel.app/)**

Experience the full functionality of the Personal Finance Tracker in the live deployment hosted on Vercel.

## ✨ Features

### 📊 Dashboard & Analytics
- **Financial Overview**: Real-time summary of income, expenses, and account balances
- **Interactive Charts**: Multiple chart types including area, bar, line, pie, radar, and radial variants
- **Data Visualization**: Comprehensive spending analysis with category breakdowns
- **Custom Date Ranges**: Filter and analyze data across different time periods

### 💰 Account Management
- **Multiple Accounts**: Support for checking, savings, credit cards, and investment accounts
- **Account Filtering**: Easy filtering and management of financial data by account
- **Balance Tracking**: Real-time balance updates and transaction history

### 🏷️ Categories & Organization
- **Custom Categories**: Create and manage spending categories
- **Transaction Categorization**: Organize expenses for better insights
- **Category Analytics**: Detailed breakdown of spending by category

### 💳 Transaction Management
- **Transaction Tracking**: Add, edit, and delete income and expense transactions
- **Bulk Operations**: Import transactions via CSV files
- **Advanced Filtering**: Filter transactions by date, amount, category, and account
- **Search Functionality**: Quick search through transaction history

### 🔐 Security & Authentication
- **Secure Login**: Powered by Clerk authentication
- **User Isolation**: Each user's data is completely private and secure
- **Protected Routes**: All financial data is protected behind authentication

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **React Hook Form** - Form handling and validation
- **Recharts** - Data visualization library
- **Zustand** - State management

### Backend & Database
- **Hono** - Fast web framework for API routes
- **Drizzle ORM** - Type-safe database toolkit
- **Neon Database** - Serverless PostgreSQL
- **Zod** - Schema validation

### Authentication & Tools
- **Clerk** - Authentication and user management
- **React Query** - Data fetching and caching
- **ESLint** - Code linting
- **TypeScript** - Static type checking

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun
- A Neon Database account
- A Clerk account for authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd personal-finance-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory and add your environment variables:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   # Database
   DATABASE_URL=your_neon_database_url
   ```

4. **Database Setup**
   ```bash
   # Generate database migrations
   npm run db:generate
   
   # Run migrations
   npm run db:migrate
   
   # Seed database (optional)
   npm run db:seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📖 Usage

### Initial Setup
1. Sign up or sign in using the authentication system
2. Create your first account (e.g., "Checking Account", "Savings Account")
3. Set up categories for your expenses (e.g., "Food", "Transportation", "Entertainment")

### Adding Transactions
1. Navigate to the Transactions page
2. Click "Add Transaction" to record income or expenses
3. Select the appropriate account and category
4. Add transaction details including amount, payee, and notes

### Viewing Analytics
1. Visit the Dashboard to see your financial overview
2. Use date filters to analyze specific time periods
3. Explore different chart types to visualize your spending patterns
4. Review category breakdowns to understand your spending habits

### Importing Data
1. Use the CSV import feature to bulk upload transactions
2. Ensure your CSV follows the required format
3. Map columns to the appropriate transaction fields

## 🗂️ Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── (dashboard)/       # Main application pages
│   └── api/               # API routes
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components (Radix UI)
│   └── ...               # Feature-specific components
├── db/                   # Database configuration and schema
├── features/             # Feature-based modules
│   ├── accounts/         # Account management
│   ├── categories/       # Category management
│   ├── summary/          # Analytics and summaries
│   └── transactions/     # Transaction management
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── providers/            # Context providers
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with sample data
- `npm run db:studio` - Open Drizzle Studio for database management

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Vercel](https://vercel.com/) for seamless deployment and hosting
- [Clerk](https://clerk.com/) for authentication services
- [Neon](https://neon.tech/) for serverless PostgreSQL
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Drizzle ORM](https://orm.drizzle.team/) for database management

---

Built with ❤️ for better financial management and awareness.
