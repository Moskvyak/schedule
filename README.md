# Skedulo Tech Test

## Pre-Requisites

- Node
- Npm

## Installation Instructions
Install:
    ```npm run bootstrap```

This installs everything for the App as well as the Server, so please don't run ```npm install``` (unless you also want to run it from the `server` folder)

## Running the App
Run:
    ```npm run start```

## Testing the App
Run:
    ```npm run test```


## Instructions

Please complete the exercises provided on the 'Question One' and 'Question Two' pages

## Comments
##### Things covered:

| Area         |    Feature / Comment       |
| ------------- |-------------|
| Testing    | Setting up global mocks in Testing  |
| Testing      | jest unit tests      |
| UX | Use of Debounce component to provide better UX    |
| UI | Color consistency, component styling      |
| API | GraphQL requests      |
| Code style | classNames consistency      |
| Code style | naming convention consistency      |
| Refactoring | improved propTypes and use of keys      |
| Performance | React memo and pure components      |
| Performance | Use Debounce to minimise the amount of api requests      |
| npm packages | react-debounce-input, font-awesome      |
| npm packages | moment.js     |

##### Improvement considerations:

| Area         |   Comment       |
| ------------- |-------------|
| Testing      | could be more jest snapshot tests for non-required props and different states   |
| Testing      | write tests for all component to increase test coverage    |
| API, UI | Error handling could be implement as popup, message format considerations     |
| UI | Colored borders for job/activity cards / list items could be reusable component     |
| UI / UX | Swimlane could be improved to allow scroll, zooming or tooltips   |
| UI / UX | Mobile experience should be improved   |
| UI / UX | Calendar view could be scrolled to the earliest event  |
| Refactoring | naming convention of folders and use of index.js   |
| Refactoring | multiple components in one component folder vs one component - one folder   |
| Refactoring | Typescipt is better than PropTypes   |
