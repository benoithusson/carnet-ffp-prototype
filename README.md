# Carnet FFP - PWA Project

## 📖 Project Overview
A Progressive Web App (PWA) prototype for a skydiving jump log that allows skydivers to digitally log, view, and manage their complete jump history.

---

## 🗂️ Project Structure

```
carnet-ffp/
├── .claude/
│   └── commands/
│       ├── execute-prp.md      # Main command to build screens
│       └── delete-prp.md       # Command to delete screens
├── guidelines/
│   └── guidelines-components.md # UI/UX interaction guidelines
├── docs/
│   ├── figma-links.md          # Figma designs progress tracker
│   ├── my-guidelines.md        # Additional guidelines
│   └── archives/               # Archived files
├── app/                         # Main application folder
│   └── src/
│       └── styles/
│           └── main.css        # Global styles
├── context.md                   # Project context & technical requirements
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
   - ✅ Reads design guidelines from `guidelines/guidelines-components.md`
   - ✅ Extracts Figma design
   - ✅ Checks existing CSS styles
   - ✅ Builds React component with BEM CSS
   - ✅ Adds component to app folder
   - ✅ Updates main menu with navigation link
   - ✅ Marks screen as DONE in `docs/figma-links.md`

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

### **docs/figma-links.md**
Progress tracker for all Figma designs:
- List of all screens to implement
- Mark screens as DONE when completed
- Track overall progress

### **guidelines/guidelines-components.md**
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

### **Local Testing**

Run the app locally:
```bash
cd app
npm run start
```

The app will be available at `http://localhost:5173` (or the port shown in your terminal).

### **Mobile Testing with ngrok**

To test the PWA on your iPhone (or any mobile device):

1. **Install ngrok** (if not already installed):
   ```bash
   brew install ngrok
   ```
   Or download from [ngrok.com](https://ngrok.com)

2. **Start your local server** (in terminal 1):
   ```bash
   cd app
   npm run start
   ```
   Note the port number (usually `5173`)

3. **Expose with ngrok** (in terminal 2):
   ```bash
   ngrok http 5173
   ```
   Replace `5173` with your actual port number

4. **Access on mobile**:
   - Copy the HTTPS forwarding URL from ngrok (e.g., `https://abc123.ngrok-free.app`)
   - Open this URL on your iPhone
   - To install as PWA: Tap the Share button → "Add to Home Screen"

5. **Keep both terminals running** while testing

**Note**: The free ngrok URL changes each time you restart ngrok. For a permanent URL, consider upgrading to a paid ngrok plan.

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

- `context.md` → Links to `docs/figma-links.md`, `guidelines/guidelines-components.md`, `app/src/styles/main.css`
- `execute-prp.md` → Links to all project files
- `delete-prp.md` → Links to app folder and `docs/figma-links.md`

This ensures automation works seamlessly when you run commands.

---

## 📊 Progress Tracking

Check `docs/figma-links.md` for:
- Total number of screens
- Completed screens (marked with `- DONE`)
- Remaining screens to implement

---

## 🤝 Contributing

When adding new screens:
1. Add Figma link to `docs/figma-links.md`
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
