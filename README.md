# HubSpot/React boilerplate

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Getting Started

For more information on local development tools, see
[Local Development Tooling: Getting Started](https://designers.hubspot.com/docs/tools/local-development)

### Configuration

#### Set up HubSpot CMS CLI ([`@hubspot/cli`](https://www.npmjs.com/package/@hubspot/cli))

- A config file named `hubspot.config.yml` will also be needed. The config can
  be at the project level or higher up in the directory tree.
- Be sure to set a `defaultPortal` in your `hubspot.config.yml` to which you'd
  like the built app files to sync.

### Install

- Run `npm install` or `yarn install` to install needed dependencies.

### Running

- Run `npm start` or `yarn start` to automatically upload your project to
  `defaultPortal`.
- Create a page from default theme, or any drag-and-drop (`dnd_area`) enabled
  template in your portal, and add the `app (label: React app boilerplate)`
  module.
