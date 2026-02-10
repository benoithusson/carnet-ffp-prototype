---
description: Delete a screen and update project files
---

# INSTRUCTIONS FOR DESIGN DELETION

## SCREEN TO DELETE
Screen Name: $ARGUMENTS

---

## 📋 AUTOMATED DELETION WORKFLOW

### 1. IDENTIFY THE SCREEN
**Action**: Locate the screen component and related files
- Search in `/Users/benoitthiennard/Desktop/Disque/Code/carnet-ffp-2/PWA` for the component
- Identify all related files (JSX, CSS, etc.)

### 2. DELETE COMPONENT FILES
**Action**: Remove all files associated with the screen
- Delete React component file
- Delete CSS file
- Delete any other related assets

### 3. UPDATE MAIN MENU
**Action**: Remove the link from the main navigation page
- Remove the navigation link to the deleted screen

### 4. UPDATE FIGMA LINKS TRACKER
**Action**: Update progress tracking
- Remove "- DONE" marker from the screen entry in `/Users/benoitthiennard/Desktop/Disque/Code/carnet-ffp-2/figma-links.md`
- Or remove the entire entry if requested

### 5. VALIDATION CHECKLIST
**Action**: Display deletion summary
- Generate a checklist with: `[✅] Task name and outcome`
- Include title: **Deletion Summary**

---

## ⚠️ IMPORTANT REMINDERS
- Verify the screen name before deletion
- Check for dependencies in other components
- Update navigation/routing if necessary