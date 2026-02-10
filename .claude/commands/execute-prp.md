---
description: Execute the design implementation workflow from Figma links
---

# INSTRUCTIONS FOR DESIGN EXECUTION

## FIGMA LINK INPUT
Figma Link: $ARGUMENTS

---

## 📋 AUTOMATED WORKFLOW

### 1. LOAD PROJECT CONTEXT
**Action**: Read and integrate all project conventions and constraints
- **File**: `/Users/benoitthiennard/Desktop/Disque/Code/carnet-ffp/context.md`
- **Purpose**: Understand your role, tech stack, project structure, and constraints

### 2. LOAD DESIGN GUIDELINES
**Action**: Read component behavior and interaction guidelines
- **File**: `/Users/benoitthiennard/Desktop/Disque/Code/carnet-ffp/guidelines/guidelines-components.md`
- **Purpose**: Understand input behaviors, header rules, CTA positioning, etc.

### 3. PROCESS FIGMA LINK
**Action**: Handle the Figma link provided in arguments

**If a new Figma link is provided**:
- Add it to `/Users/benoitthiennard/Desktop/Disque/Code/carnet-ffp/docs/figma-links.md` following the existing format:
  ```markdown
  ### [Screen Number] - [Screen Name]
  [Figma URL]
  ```
- Extract the screen name from the Figma file or ask the user
- Assign the next sequential number

**If no link in arguments**:
- Read from `/Users/benoitthiennard/Desktop/Disque/Code/carnet-ffp/docs/figma-links.md` and pick the first non-DONE item

**Important**: Only implement the screen content, not the gray wrapper or post-it notes around it

### 4. CHECK EXISTING STYLES
**Action**: Review existing CSS to reuse classes and maintain consistency
- **File**: `/Users/benoitthiennard/Desktop/Disque/Code/carnet-ffp/app/src/styles/main.css`

### 5. BUILD THE COMPONENT
**Action**: Generate React component with BEM CSS
- Use ReactJS (no Vite, no Tailwind)
- Follow BEM naming convention strictly
- Add the component to existing app folder structure
- Reuse existing components when possible
- Include dummy data
- Add smooth animations where appropriate

### 6. UPDATE MAIN MENU
**Action**: Add a link to the new screen in the main menu page
- Ensure navigation is working

### 7. UPDATE DESIGN SYSTEM
**Action**: Add new components to the design system documentation
- **File**: `/Users/benoitthiennard/Desktop/Disque/Code/carnet-ffp/design-system.html`
- **IMPORTANT**: First read the existing design-system.html to see what components already exist
- Only add NEW reusable components that don't already exist in the design system
- For each NEW component, add:
  - Component name and description
  - Visual example (rendered HTML)
  - HTML/JSX code snippet
  - BEM CSS classes used
  - Mark clearly as "NEW" or add a timestamp
- Only add truly reusable components (buttons, inputs, cards, headers, etc.), not full page layouts
- If a similar component already exists, mention it in your validation checklist but don't duplicate it

### 8. MARK AS COMPLETE
**Action**: Update progress tracking
- Add "- DONE" after the Figma link in `/Users/benoitthiennard/Desktop/Disque/Code/carnet-ffp/docs/figma-links.md`
- Example: `# 04 - Numéro de licence FFP - DONE`

### 9. VALIDATION CHECKLIST
**Action**: Display completion summary
- Generate a checklist with: `[✅] Task name and outcome`
- Include title: **Action Summary**

---

## 🎯 OUTPUT REQUIREMENTS
- React component (JSX) with proper BEM structure
- Vanilla CSS in separate file
- Comments explaining BEM structure and dummy data usage
- Component added to existing project (not a new project)
- Main menu updated with link to new screen
- Design system updated with new reusable components

---

## ⚠️ IMPORTANT REMINDERS
- Don't duplicate existing screens
- Only implement screen content (no Figma UI elements)
- Follow KISS principle (Keep It Simple, Stupid)
- Code like a junior frontend developer would
- No backend, no external APIs - dummy data only