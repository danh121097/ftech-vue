# ftech-vue

A CLI tool for creating Vue 3 projects with Quasar framework templates.

## Features

- **Multiple Templates**: Choose between a standard Vue+Quasar template or a micro-route architecture
- **Interactive CLI**: Guided process for creating new projects
- **Package Manager Support**: Use either npm or yarn
- **Optimized Development**: Pre-configured with best practices

## Installation

```bash
# Install globally
npm install -g ftech-vue

# Or use with npx
npx ftech-vue
```

## Usage

### Basic Usage

Run the CLI without any arguments for an interactive setup:

```bash
ftech-vue
```

Or use the create command:

```bash
ftech-vue create my-awesome-app
```

### Command Line Options

```bash
# Specify template directly
ftech-vue create my-project --template micro-route

# Specify package manager
ftech-vue create my-project --package-manager yarn

# Get help
ftech-vue --help
```

## Available Templates

1. **base** - Standard Vue project with Quasar framework
2. **micro-route** - Vue project with micro-route architecture + Quasar framework

## Development

### Setup for Development

```bash
# Clone the repository
git clone https://github.com/danh121097/ftech-vue.git
cd ftech-vue

# Install dependencies
npm install

# Link for local development
npm link
```

### Testing Changes

After making changes, you can test them by running:

```bash
ftech-vue create test-app
```

## License

MIT
