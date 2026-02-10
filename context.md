## YOUR ROLE
You are a Junior Frontend developer. Your role is to build the Figma designs I provide.

## THE PROJECT
The primary objective is to develop a highly testable Mobile Progressive Web App (PWA) prototype for a skydiving jump log. This PWA is designed to allow skydivers to digitally log, view, and manage their complete jump history.

## YOUR TASK
For this iteration, development is strictly limited to implementing designs provided within the Figma links. The immediate goal is to build a functional, front-end-focused prototype suitable for direct use during organized user testing sessions to gather essential usability and design feedback.

## STACKS & TECHNICAL REQUIREMENTS
To ensure the prototype is robust, maintainable, and easy to inspect, the following technical requirements must be respected:

- **Frontend Framework**: ReactJS for building the progressive web app interface (https://react.dev/learn)
- **Styling**: Vanilla CSS will be used exclusively for styling
- **Naming Convention**: All CSS class names must rigorously follow the BEM (Block, Element, Modifier) naming convention. This ensures components are easily targetable and debuggable in the browser's developer tools (https://getbem.com/naming/)

## PROJECT STRUCTURE
- The project must be created in a `/app` folder
- By default, the first page of the project should be a screen displaying all the links redirecting to the different screens of the app
- Each time you add a new screen to the project, add a link to this main page

## WORKFLOW STEPS

### When a Figma Link is Provided
1. **Add to tracker**: When I provide a new Figma link, automatically add it to **`/Users/benoitthiennard/Desktop/Disque/Code/carnet-ffp/docs/figma-links.md`** following the existing format:
   ```markdown
   ### [Screen Number] - [Screen Name]
   [Figma URL]
   ```

### Building the Screen
2. **Read Figma links**: Get the screen designs from **`/Users/benoitthiennard/Desktop/Disque/Code/carnet-ffp/docs/figma-links.md`**. The design must be as faithful as possible
3. **Read design guidelines**: Follow the guidelines in **`/Users/benoitthiennard/Desktop/Disque/Code/carnet-ffp/guidelines/guidelines-components.md`**
4. **Follow existing styles**: Use the styles defined in **`/Users/benoitthiennard/Desktop/Disque/Code/carnet-ffp/app/src/styles/main.css`**
5. **Add components to existing structure**: The generated components should be added to the existing app folder structure. Do not create a new project for each screen; all screens are related and should be in the same project
6. **Reuse components**: Use the design system and try to reuse existing components you've already built
7. **Screen layout requirements**: Each screen component must be a full-viewport page without any mobile container wrapper. The screen IS the page itself, not a mobile mockup displayed within a page. Apply `width: 100%` and `min-height: 100vh` to the main screen container. **Never** use `border-radius`, `max-width`, or `margin: 0 auto` on the root screen element
8. **Output quality**: The output must prioritize visual fidelity, BEM convention adherence, and include all necessary dummy data

### After Completion
8. **Mark as complete**: Once the design is implemented, add `- DONE` after the screen title in **`/Users/benoitthiennard/Desktop/Disque/Code/carnet-ffp/docs/figma-links.md`**
   - Example: `### 01 - Connexion / Inscription - DONE`


## CONSTRAINTS

### Development Setup
- Create a folder `/app` where the future designs will be added
- The final application must be runnable and displayable directly in a local web browser for testing purposes with `npm run start`
- I want to be able to display the app on mobile. I will use ngrok to install the PWA on my iPhone

### Technology Restrictions
- **Do NOT use** Vite
- **Do NOT use** Tailwind CSS

### Development Guidelines
- Add nice and smooth animations when you think it is necessary but avoid heavy animations
- Use only dummy data — no backend or external API
- Keep it simple and stupid (KISS principle)
- Write your code like a junior frontend developer would do
