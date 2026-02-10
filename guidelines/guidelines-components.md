# COMPONENT DESIGN GUIDELINES

## 📌 GENERAL PRINCIPLES

### Navigation
- **Menu Screen**: Create a direct link with a CTA for each page so that users don't need to do the entire flow to see a specific page
- **Quick Return**: By double clicking on any screen, users should be able to come back to the menu screen
- **Scrollability**: Each screen should be scrollable
- **Responsiveness**: Each screen should be responsive and adapt automatically to the device it's being displayed on

## 📝 INPUT FIELDS

### General Input Behavior
- **Focus State**: When clicked, add a 4px border
- **Focus Reset**: The focus state returns to its initial state when clicking on another input
- **Numeric Validation**: In numeric fields, letters cannot be entered

### Date Fields (date-naissance, etc.)
- **Auto-formatting Day**: After entering the first two digits for the day, automatically add a slash `/` and move the cursor directly to the month input
- **Auto-formatting Month**: After entering the two digits for the month, automatically add a slash `/` and move the cursor directly to the year input
- **Auto-formatting Year**: After entering the four digits for the year, the date input is complete
- **Implementation**: Use JavaScript `onInput` event to detect when 2 digits are entered, add the slash automatically, and move focus to the next segment
- **Locale Format**:
  - France: DD/MM/YYYY (🇫🇷)
  - Others: MM/DD/YYYY (🇺🇸)
- **Example behavior**:
  ```
  User types: "15" → Input shows: "15/" (cursor moves to month)
  User types: "08" → Input shows: "15/08/" (cursor moves to year)
  User types: "1990" → Input shows: "15/08/1990" (complete)
  ```

## 📱 HEADER

### General Header Behavior
- **Back Navigation**: If the header contains a back arrow, clicking on it redirects to the previous screen

### Header with Searchbar
- **Scroll Behavior**: On scroll down, the search bar disappears
- **Spacing Preservation**: The spacing between the list and the bottom of the header should remain the same as when the search bar was visible (32px)

### Header with Subtitle
- **Dynamic Display**: The header subtitle disappears when scrolling down and reappears when scrolling up to allow for more space

## ✅ RADIO BUTTONS & CHECKBOXES

### Radio Button Behavior
- **Default Selection**: If the list contains radio buttons, the first option in the list is always selected by default, unless the user has already selected a different option

## 🔘 CALL-TO-ACTION (CTA)

### CTA Positioning
- **Bottom Placement**: Main CTA and CTA Containers should always be at the bottom of the screen