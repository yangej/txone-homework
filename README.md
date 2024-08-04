## Get Started

### Step1: Get API key

- Sign up free account to retrieve API key for OpenWeatherMap API from https://openweathermap.org/price.
    - Good to know: the API key activation might take 10 minutes - 2 hours.
- Store API key to `.env.local` in form of `REACT_APP_OPEN_WEATHER_API_KEY={YOUR_API_KEY}`.

### Step2: Run `npm start`

- This scripts runs the app in the development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Tech Stack

- React.js
- Typescript
- MUI - UI library
- recharts - chart UI library
- tailwind - styling tool
- @tanstack/query - fetching tool

## Introduction

### Layout

The layout includes 3 parts: Header, Sider and Main. Functions implemented will be described below:

- Header: Read-only. It displays the logo and user avatar.
- Sider:
    - Available pages are listed here. When users click the item, they will be directed to the target page.
    - The active item is decided based on the pathname of the current page.
- Main: A slot to display the views from different pages. Shared spacing and background color are set here.

### Weather Page

![interaction-weather-page](https://github.com/user-attachments/assets/71d0faa4-3e9a-4ee9-917d-70a4770c391d)

- This page implements weather search feature. You can search for the weather based on the location.
- Data fetch:
    - Proxy server:
        - There's no CORS-related header set on this service. We need to setup a proxy server to avoid our request being blocked by the browser.
        - Route paths for different services are designed in `/api/**` format, so that we could proxy multiple services in this App. In the open weather API case, it's set to `/api/open-weather`.
    - API clients:
        - API client is used to fetch data from certain resource.
        - They are created by a factory function called `createAPIClient`, so that we could avoid duplicated API settings for the same resource. In the open weather API case, the client is `clients.openWeather`.
    - Search query:
        - The API called in this page is the current weather. We need to pass `country` and `city` to query the data.
        - The search query is maintained in the URL, so that users could share the search result to others.
- Interaction:
    - Enter the city and country to the inputs
    - Click `Search` button
    - Display the loading view if the data is still fetching
    - Display the data if there's data found
    - Display the error view if the data doesn't exist

### Population Page

![interaction-population-page](https://github.com/user-attachments/assets/d4faacdc-c46d-436c-9c69-4616a1348a4c)

- This page implements population data display feature. You can see the trend from the chart.
- The library `recharts` is used to draw the line chart.
