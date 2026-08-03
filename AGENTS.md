# AGENTS.md

# Next.js Frontend Development Guide

This document defines the standards every developer and AI agent must follow when working on this project.

The goal is to make the codebase:

- Easy to understand
- Easy to maintain
- Easy to scale
- Beginner friendly
- Consistent across the entire application

---

# Tech Stack

- Next.js (App Router)
- TypeScript
- React
- Tailwind CSS
- TanStack Query
- Zustand (Global State)
- React Hook Form
- Zod
- Axios
- ESLint
- Prettier

---

# Core Principles

## 1. Keep It Simple

Prefer simple solutions over clever ones.

Bad

```tsx
const x = users?.filter(...).map(...).reduce(...)
```

Better

```tsx
const activeUsers = users.filter(...)
const mappedUsers = activeUsers.map(...)
```

Readable code is more important than shorter code.

---

## 2. One Responsibility Per File

Every file should have one purpose.

Good

```
UserCard.tsx
UserForm.tsx
UserService.ts
UserRepository.ts
UserValidation.ts
```

Bad

```
User.tsx

Contains:
- UI
- API
- Validation
- Utility
- Types
```

---

## 3. Avoid Over Engineering

Do not create abstraction until it is actually needed.

Don't build for future possibilities.

Build for current requirements.

---

## 4. Favor Composition

Instead of giant components.

Bad

```
Dashboard
 ├── Header
 ├── Sidebar
 ├── Menu
 ├── Charts
 ├── Table
 ├── Pagination
 ├── Filters
```

Better

```
DashboardPage

components/
    DashboardHeader
    DashboardSidebar
    DashboardCharts
    DashboardTable
```

---

# Folder Structure

```
src/
│
├── app/
│
├── components/
│   ├── common/
│   ├── layouts/
│   └── ui/
│
├── features/
│   ├── auth/
│   ├── users/
│   ├── dashboard/
│   └── products/
│
├── services/
│
├── hooks/
│
├── lib/
│
├── providers/
│
├── store/
│
├── types/
│
├── utils/
│
├── constants/
│
└── config/
```

---

# Feature Structure

Each feature owns its own files.

```
features/

users/

    api/
        get-users.ts
        create-user.ts

    components/
        UserCard.tsx
        UserForm.tsx
        UserTable.tsx

    hooks/
        useUsers.ts
        useCreateUser.ts

    schemas/
        user.schema.ts

    types/
        user.ts

    utils/
        format-user.ts

    constants.ts

    index.ts
```

Everything related to Users stays inside Users.

---

# Naming Convention

## Components

Use PascalCase

```
UserCard.tsx
LoginForm.tsx
DashboardHeader.tsx
```

---

## Hooks

Always prefix with use

```
useUser.ts
useUsers.ts
useDebounce.ts
```

---

## Services

Use verb + noun

```
getUsers.ts
createUser.ts
deleteUser.ts
updateProfile.ts
```

---

## Types

```
User
CreateUserDto
LoginRequest
ProductResponse
```

Avoid

```
UserData
MyUser
TempUser
```

---

## Variables

Use descriptive names.

Good

```tsx
const selectedProduct;
const filteredUsers;
const totalPrice;
```

Bad

```tsx
const p;
const d;
const temp;
const item2;
```

---

# Components

Prefer small reusable components.

Bad

```
800 lines
```

Target

```
50-200 lines
```

If a component exceeds ~250 lines, consider splitting it.

---

# Component Order

```tsx
type Props

const constants

export function Component() {

    hooks

    state

    derived values

    handlers

    effects

    return
}
```

---

# Props

Good

```tsx
type Props = {
  user: User;
  onSave: () => void;
};
```

Bad

```tsx
type Props = any;
```

Never use any unless absolutely necessary.

---

# Server Components

Default to Server Components.

Use Client Components only when needed.

Examples

- useState
- useEffect
- useQuery
- event handlers
- browser APIs

If none of these exist

→ keep it server component.

---

# Data Fetching

Server Component

```tsx
const users = await getUsers();
```

Client Component

```tsx
const { data } = useUsers();
```

Avoid fetching on the client if the data can be fetched on the server.

---

# API Layer

Never call Axios directly inside components.

Bad

```tsx
axios.get(...)
```

Good

```
Component

↓

Hook

↓

Service

↓

Axios Client
```

Example

```
useUsers()

↓

getUsers()

↓

apiClient.get(...)
```

---

# Axios

Use one shared instance.

```
lib/

axios.ts
```

Example

```ts
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
```

---

# React Query

One hook per endpoint.

```
useUsers()

useUser()

useCreateUser()

useDeleteUser()
```

Avoid mixing many API calls into one hook.

---

# Global State

Use Zustand only for truly global state.

Examples

- Theme
- User Session
- Sidebar
- Language
- Notification

Do NOT store server data in Zustand.

Use React Query instead.

---

# Forms

Always use

- React Hook Form
- Zod

Validation belongs inside schemas.

```
schemas/

login.schema.ts
```

---

# Utilities

Utilities should be pure.

Good

```ts
formatCurrency();
```

Bad

Utility making API calls.

---

# Constants

Good

```ts
export const MAX_UPLOAD_SIZE = 5;
```

Avoid

Magic numbers.

---

# Environment Variables

Never access process.env everywhere.

Instead

```
config/env.ts
```

```ts
export const env = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL!,
};
```

---

# Error Handling

Every API call should throw meaningful errors.

Avoid

```ts
throw error;
```

Prefer

```ts
throw new Error("Failed to load users.");
```

---

# Loading State

Every async UI should have

- loading
- error
- empty
- success

Never assume data always exists.

---

# Styling

Use Tailwind.

Rules

- Keep className readable
- Extract reusable UI
- Avoid duplicated utility classes

Bad

Huge className with 30 utilities repeated everywhere.

Better

Reusable Button component.

---

# Imports

Order imports

```tsx
// React

// Next

// Third-party

// Components

// Hooks

// Services

// Types

// Utils

// Styles
```

Example

```tsx
import Link from "next/link";

import { useQuery } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";

import { useUsers } from "@/features/users/hooks/useUsers";

import type { User } from "@/features/users/types";
```

---

# Comments

Comment WHY.

Not WHAT.

Bad

```tsx
// Increment i

i++;
```

Good

```tsx
// Skip archived users because backend returns both active and archived users.
```

---

# TypeScript

Avoid

```ts
any;
```

Prefer

```ts
unknown;
```

or proper interfaces.

---

# Barrel Files

Allowed

```
index.ts
```

Only for exports.

Never place business logic inside barrel files.

---

# Reusable UI

Reusable components belong in

```
components/ui
```

Business-specific components belong inside

```
features/*
```

---

# Custom Hooks

Custom hooks should only encapsulate logic.

They should not render JSX.

---

# Business Logic

Keep business logic out of components.

Bad

```tsx
Component

↓

200 lines of calculations
```

Better

```
Component

↓

Hook

↓

Utility
```

---

# Accessibility

Always

- button instead of clickable div
- label every input
- alt for images
- keyboard accessible
- aria attributes when necessary

---

# Performance

Use

- Server Components
- Suspense
- Dynamic Imports
- Image optimization
- Memoization only when needed

Avoid premature optimization.

---

# Testing (Recommended)

```
Unit

↓

Hooks

↓

Components

↓

Integration
```

---

# Git Commit Convention

```
feat:

fix:

refactor:

style:

test:

docs:

chore:
```

Example

```
feat(users): add create user page

fix(auth): handle expired token

refactor(table): simplify pagination
```

---

# Pull Request Checklist

- Feature works
- No TypeScript errors
- No ESLint warnings
- No console.log
- Responsive
- Accessible
- API errors handled
- Loading state exists
- Empty state exists
- Components are reusable
- No duplicated code

---

# Things to Avoid

❌ Massive components

❌ Business logic inside JSX

❌ Repeated API calls

❌ Magic numbers

❌ any everywhere

❌ Deep prop drilling

❌ Duplicate components

❌ Copy-paste code

❌ Direct axios usage inside components

❌ Global state for server data

❌ Over abstraction

---

# Decision Flow

Need data?

↓

Server Component?

YES

↓

Fetch on server

NO

↓

Need caching?

↓

YES

↓

React Query

NO

↓

Simple fetch

---

Need shared state?

↓

Server data?

↓

YES

↓

React Query

↓

NO

↓

UI State?

↓

YES

↓

Zustand

↓

NO

↓

Component State

---

# Golden Rule

Write code as if the next developer is a junior engineer seeing the project for the first time.

Prioritize readability over cleverness.

If a new team member cannot understand your code within a few minutes, it is probably too complex.
