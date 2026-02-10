# Carnet FFP - PWA Project

## 📖 Project Overview
A Progressive Web App (PWA) prototype for a skydiving jump log that allows skydivers to digitally log, view, and manage their complete jump history.

---

## 🗂️ Project Structure

```
carnet-ffp-2/
├── .claude/
│   └── commands/
│       ├── execute-prp.md      # Main command to build screens
│       └── delete-prp.md       # Command to delete screens
├── design/
│   └── guidelines-components.md # UI/UX interaction guidelines
├── PWA/                         # Main application folder
│   └── src/
│       └── styles/
│           └── main.css        # Global styles
├── context.md                   # Project context & technical requirements
├── figma-links.md              # Figma designs progress tracker
└── README.md                    # This file
```

---

## 🚀 Quick Start Workflow

### **To Build a New Screen from Figma:**

1. **Run the command:**
   ```
   /execute-prp <figma-link>
   ```
   Or simply:
   ```
   /execute-prp
   ```
   *(It will automatically pick the first non-DONE screen from `figma-links.md`)*

2. **What happens automatically:**
   - ✅ Loads project context from `context.md`
   - ✅ Reads design guidelines from `design/guidelines-components.md`
   - ✅ Extracts Figma design
   - ✅ Checks existing CSS styles
   - ✅ Builds React component with BEM CSS
   - ✅ Adds component to PWA folder
   - ✅ Updates main menu with navigation link
   - ✅ Marks screen as DONE in `figma-links.md`

### **To Delete a Screen:**

```
/delete-prp <screen-name>
```

---

## 📋 Key Files Explained

### **context.md**
Contains all project requirements:
- Your role as Junior Frontend Developer
- Tech stack (React, Vanilla CSS, BEM)
- Project structure rules
- Development constraints

### **figma-links.md**
Progress tracker for all Figma designs:
- List of all screens to implement
- Mark screens as DONE when completed
- Track overall progress

### **design/guidelines-components.md**
UI/UX behavior specifications:
- Input field behaviors
- Header interactions
- Radio button defaults
- CTA positioning rules

### **.claude/commands/execute-prp.md**
Automated workflow for building screens:
- 8-step process from context loading to validation
- Ensures consistency across all screens
- Automatic progress tracking

---

## 🛠️ Tech Stack

- **Framework**: ReactJS
- **Styling**: Vanilla CSS only (no Tailwind)
- **Convention**: BEM (Block Element Modifier)
- **Build Tool**: No Vite
- **Data**: Dummy data only (no backend)

---

## 📱 Testing

Run the app locally:
```bash
cd PWA
npm run start
```

For mobile testing:
- Use ngrok to expose local server
- Install PWA on iPhone for testing

---

## 🎯 Design Principles

- **Visual Fidelity**: Match Figma designs as closely as possible
- **BEM Convention**: All CSS classes follow BEM strictly
- **Component Reuse**: Reuse existing components when possible
- **KISS Principle**: Keep It Simple, Stupid
- **Junior-Level Code**: Write straightforward, readable code

---

## ✅ Workflow Best Practices

1. **One screen at a time**: Build screens sequentially
2. **Check existing styles**: Reuse CSS classes from `main.css`
3. **Update menu**: Always add navigation links
4. **Mark as done**: Update `figma-links.md` after completion
5. **Follow BEM**: Use proper Block__Element--Modifier naming

---

## 🔗 File Linking System

All markdown files are linked with **absolute paths** to ensure commands work correctly from any directory:

- `context.md` → Links to `figma-links.md`, `design/guidelines-components.md`, `PWA/src/styles/main.css`
- `execute-prp.md` → Links to all project files
- `delete-prp.md` → Links to PWA folder and `figma-links.md`

This ensures automation works seamlessly when you run commands.

---

## 📊 Progress Tracking

Check `figma-links.md` for:
- Total number of screens
- Completed screens (marked with `- DONE`)
- Remaining screens to implement

---

## 🤝 Contributing

When adding new screens:
1. Add Figma link to `figma-links.md`
2. Run `/execute-prp` command
3. Verify component works in browser
4. Check that main menu link is added
5. Confirm screen is marked DONE

---

## 📝 Notes

- **No emojis** in code unless explicitly requested
- **Dummy data only** - no API calls
- **Smooth animations** - but avoid heavy effects
- **Mobile-first** - design for mobile display
- **BEM strict** - makes debugging easier

---

**Last Updated**: 2026-02-10
