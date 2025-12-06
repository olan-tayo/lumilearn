# LumiLearn

A modern e-learning platform built with Next.js 16, featuring course discovery, shopping cart functionality, and a seamless checkout experience.

## ✨ Features

- **Course Discovery**: Browse and explore available courses
- **Shopping Cart**: Add courses to cart with persistent state management
- **Checkout System**: Complete payment flow with card payment integration
- **Responsive Design**: Modern UI built with Tailwind CSS
- **State Management**: Zustand for efficient global state with persistence
- **Form Validation**: React Hook Form with Zod validation
- **TypeScript**: Fully typed for better developer experience

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (React 19.2)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **State Management**: Zustand with persistence
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## 📁 Project Structure

```
lumilearn/
├── app/                    # Next.js app directory
│   ├── (dashboard)/       # Dashboard layout group
│   │   ├── cart/          # Shopping cart page
│   │   ├── checkout/      # Checkout flow
│   │   └── discover/      # Course discovery
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── BreadCrumb/
│   ├── Buttons/
│   ├── Cards/
│   ├── Input/
│   ├── Modal/
│   ├── Nav/
│   └── Sidebar/
├── containers/            # Feature containers
│   ├── Cart/
│   ├── Checkout/
│   └── Courses/
├── store/                 # Zustand stores
│   ├── cart/
│   └── courses/
├── types/                 # TypeScript type definitions
├── utils/                 # Utility functions
└── validators/            # Form validators

```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/olan-tayo/lumilearn.git
cd lumilearn
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```bash
cp env.example .env
```

Edit `.env` and add your configuration:

```env
NEXT_PUBLIC_API_URL=your_api_url_here
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.
