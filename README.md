# Nestix Monorepo

`nestix` is a multi-package monorepo designed to host internal, installable NestJS libraries published under the `@flixcheck` NPM scope. By leveraging NPM workspaces, it manages development, dependency resolution, and build processes across multiple modular libraries from a single, unified codebase.

## Repository Architecture

This repository uses npm workspaces to link and build packages inside the `packages/` directory:

*   **`@flixcheck/nestix-logger`**: A NestJS module for structured logger functionality with configurable global injection.
*   **`@flixcheck/nestix-api`**: A NestJS module integrating `@nestjs/axios` to query endpoints with configurable base URLs.

---

## 🛠 Installation & Usage

To manage dependencies and build the entire workspace, run the following commands at the root of the repository:

```bash
# Install dependencies for all packages and the root monorepo
npm install

# Build all packages (generates compiled code in each package's dist/ folder)
npm run build
```

---

## 📦 Available Packages

### 1. `@flixcheck/nestix-logger`
A `@Global()` NestJS module that provides `CompanyLoggerService` to the entire application. It is dynamically configured via the custom method keys `forRoot` or `forRootAsync`.

#### Importing & Configuration

```typescript
import { Module } from '@nestjs/common';
import { CompanyLoggerModule } from '@flixcheck/nestix-logger';

@Module({
  imports: [
    CompanyLoggerModule.forRoot({
      prefix: 'APP',
    }),
  ],
})
export class AppModule {}
```

#### Injecting & Using the Service

```typescript
import { Injectable, OnInit } from '@nestjs/common';
import { CompanyLoggerService } from '@flixcheck/nestix-logger';

@Injectable()
export class AppService implements OnInit {
  constructor(private readonly logger: CompanyLoggerService) {}

  onInit() {
    this.logger.log('Application initialized successfully.');
    // Output: [APP] Application initialized successfully.
  }
}
```

---

### 2. `@flixcheck/nestix-api`
A local (non-global) NestJS module that encapsulates HTTP operations using NestJS's `@nestjs/axios` library. It is configured using the standard module method keys `register` or `registerAsync`.

#### Importing & Configuration

```typescript
import { Module } from '@nestjs/common';
import { CompanyApiModule } from '@flixcheck/nestix-api';

@Module({
  imports: [
    CompanyApiModule.register({
      baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
  ],
})
export class AppModule {}
```

#### Injecting & Using the Service

```typescript
import { Injectable } from '@nestjs/common';
import { CompanyApiService } from '@flixcheck/nestix-api';

@Injectable()
export class TestService {
  constructor(private readonly apiService: CompanyApiService) {}

  async fetchUsers() {
    const users = await this.apiService.getData('users');
    return users;
  }
}
```

---

## 🏗 Developing & Building Packages

Packages define their NestJS dependencies (e.g. `@nestjs/common`, `@nestjs/core`, `@nestjs/axios`, and `rxjs`) as `peerDependencies` to prevent multiple version collisions within a consuming application.

To build an individual package:
```bash
# Compile logger
npm run build -w packages/logger

# Compile api
npm run build -w packages/api
```
All outputs are compiled to ES2021 JavaScript and corresponding `.d.ts` declaration files inside the `dist/` directory of each package.
