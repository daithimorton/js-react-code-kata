# ReactJS Code Kata

See https://codesandbox.io/s/reactjs-code-kata-starting-point-jv9bp for starting point

Rules:

- Use styled components, no CSS files
- Use a CSS library for complex components (e.g. Accordion)
- Implement routing, no React Router
- Implement authentication state management, no Redux
- Use functional components, no class components
- Use hooks

Hints:

- Use the `styled-components` package for styling
- Use React Context API for authentication state management
- Create `popstate` event dispatcher/listeners for routing
- Use the Pokemon API https://pokeapi.co/ for data fetching
- Use Semantic UI CSS library for complex components https://semantic-ui.com/, add to index.html

Design:

- Create a landing page with:
  - Header
    - Login/Logout button
  - Main (Placeholder text)
  - Footer (Placeholder text)
- Dashboard (Only available when authed)
  - SideNav
  - Content
    - In page navigation (links to display each component):
      - Page1
        - Card grid (Responsive)
        - Accordion (3 items)
      - Page2
        - Counter (Dual counter)
        - Fetch + List (Use your favourite API)
