# Week 8: React Fundamentals - CommunityHub

## Project Overview

CommunityHub is a basic React frontend application built with Vite. This project demonstrates fundamental React concepts including JSX, components, props, state management with useState, event handling, and component composition.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.jsx       # Site header with navigation
│   │   ├── Footer.jsx       # Site footer
│   │   ├── Sidebar.jsx      # Sidebar with about/popular posts/tags
│   │   └── Layout.jsx       # Layout wrapper with children prop
│   ├── Post/
│   │   ├── PostCard.jsx     # Individual post display with props
│   │   ├── PostList.jsx     # List of posts with map and key
│   │   └── CreatePost.jsx   # Form to create new posts
│   ├── User/
│   │   ├── UserCard.jsx     # User profile card
│   │   └── UserProfile.jsx  # User profile display
│   └── shared/
│       ├── Button.jsx       # Reusable button component
│       ├── Counter.jsx      # Counter with useState
│       ├── Toggle.jsx       # Toggle component with useState
│       ├── ContactForm.jsx  # Controlled form example
│       ├── Greeting.jsx     # Conditional rendering demo
│       ├── Card.jsx         # Wrapper with children prop
│       └── UserList.jsx     # List rendering with keys
├── App.jsx                  # Main app with lifted state
└── main.jsx                 # Entry point
```

## Features Implemented

### Lesson 15 Tasks

- **Task 15.1: Setting Up React with Vite**
  - React project created with Vite
  - Modified App.jsx with name, paragraphs, current date, and time-based greeting
  - Understanding JSX syntax

- **Task 15.2: Creating Components**
  - Created functional components: Header, Footer, PostCard, Sidebar, Button
  - Component composition with Layout

- **Task 15.3: Working with Props**
  - PostCard receives props (title, excerpt, author, date)
  - Props default values and destructuring
  - Rendering lists with map() and proper key prop

- **Task 15.4: Component Composition**
  - Layout component using children prop
  - Conditional rendering patterns
  - Component composition best practices

### Lesson 16 Tasks

- **Task 16.1: useState Hook**
  - Counter component with increment/decrement/reset
  - Toggle component with boolean state
  - Multiple state variables in UserForm

- **Task 16.2: Handling Events**
  - Event handler patterns (inline, with event object, with parameters)
  - Controlled form (ContactForm) with onChange handlers
  - Prevent default behavior

- **Task 16.3: State with Arrays & Objects**
  - Todo list example with array operations
  - Never mutate state directly (immutability)
  - Adding, toggling, deleting items
  - Spread operator and map for state updates

- **Task 16.4: Lifting State Up**
  - Shared state between components (posts array in App)
  - Lifting state up to common ancestor
  - Passing data down via props
  - Passing callbacks up for child-to-parent communication

### Mini-Project: CommunityHub Frontend

Complete CommunityHub implementation including:

- Header with logo and navigation
- Sidebar with about section, popular posts, and tags
- Post creation form with state management
- Post list with like/unlike functionality
- Post deletion
- Real-time stats (total posts, total likes)
- Layout composition

### Daily Challenges

- **Day 1: Greeting Component** - Props with default values, time-based conditional messages
- **Day 2: Card Component** - Variant props, children prop, multiple styles
- **Day 3: List with Keys** - Rendering arrays, proper key usage, empty state handling
- **Day 4: Reusable Button** - Multiple prop types (text, onClick, variant, size, disabled, loading)
- **Day 5: Layout Component** - Children composition, responsive design

## Key Concepts Demonstrated

1. **JSX**: HTML-like syntax in JavaScript, expressions in curly braces
2. **Components**: Functional components as functions returning JSX
3. **Props**: Passing data from parent to child, destructuring, default values
4. **State**: useState hook for managing component state
5. **Events**: onClick, onChange, onSubmit with proper handlers
6. **Lists**: Rendering arrays with map(), unique key prop requirement
7. **Composition**: children prop, layout components, component nesting
8. **Immutability**: Never directly mutate state, use spread operator
9. **Lifting State**: Shared state at common ancestor, callbacks to notify parent

## Technologies Used

- **React 19.2.5**: UI library
- **React DOM 19.2.5**: React renderer for DOM
- **Vite 8.0.10**: Build tool and dev server
- **ESLint**: Code linting
- **JavaScript (ES6+)**: Modern JavaScript features

## Notes

- All components are functional components using React hooks
- State is lifted to the highest common ancestor for shared data
- Immutability is maintained when updating arrays/objects in state
- Each list item rendered with map() uses a unique key prop
- The application is fully responsive and works across device sizes

## Author

Rancia (ladyrancia)

## License

This project is part of the In Metastable Yet Fully Functional (IYF) bootcamp curriculum.
