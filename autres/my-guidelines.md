# LIGNES DIRECTRICES / GUIDELINES

## 🇫🇷 VERSION FRANÇAISE

### 1. Définir les objectifs du prototype
- Clarifiez avec votre équipe l'objectif : prototype pixel-perfect ou validation rapide du concept ?
- Adaptez le niveau de technicité selon l'audience : Designer ? Marketing ? Développeur ?

### 2. Éviter la sur-ingénierie
- Ne sur-développez pas le design, anticipez les changements potentiels
- Restez flexible et maintenez une architecture simple

### 3. Organisation des designs
- Segmentez vos designs en groupes logiques de fonctionnalités (chunking)
- Structurez le fichier `design_links.md` en conséquence
- Sur la page menu, séparez avec un divider les écrans appartenant à la même partie

### 4. Nommage des écrans
- Demandez toujours à Claude Code de nommer vos écrans de manière spécifique
- Cela simplifie grandement les modifications futures

### 5. Ce qui prend du temps
- Les ajustements mineurs de design via prompts
- La cohérence visuelle entre les écrans
- La gestion des liens entre les pages

### 6. Navigation dans le prototype
- Créez une page d'accueil listant tous les écrans du projet
- Ajoutez chaque nouvel écran à cette liste
- Implémentez une détection de double-tap pour revenir à l'écran initial

### 7. Installation PWA sur mobile
Pour installer une Progressive Web App (PWA) sur votre téléphone :
1. Assurez-vous que l'app soit accessible localement via `npm run start`
2. Une fois l'app lancée sur le port :3000, installez ngrok : `npm install ngrok`
3. Lancez `ngrok http 3000` dans votre terminal
4. Cela génère une URL publique sécurisée (ex: https://exemple.ngrok-free.app)
5. Ouvrez le lien ngrok dans votre navigateur mobile
6. Appuyez sur l'icône "Partager"
7. Sélectionnez "Ajouter à l'écran d'accueil"

### 8. Workflow de conception optimal
- Concevez d'abord sur papier et Figma
- Puis utilisez Claude Code pour le prototypage
- Cette approche est plus rapide que de modifier un prototype via prompting itératif

### 9. Validation post-implémentation
- Analysez toujours le design après implémentation
- N'oubliez pas : l'IA peut faire des erreurs
- Si nécessaire, listez toutes les modifications dans un prompt unique

### 10. Handoff développeur
- Cette méthode constitue un excellent moyen de transmettre le travail aux développeurs

### 11. Notes diverses
- **Design tokens** : Importer les tokens avec le plugin design tokens
- **Icons** : Prévoir l'importation des icônes
- **Gestion d'erreurs** : Difficile à prévoir, rester vigilant
- **Commentaires** : Utiliser des identifiants clairs pour les commentaires (suggestion Dimitri)

---

## 🇬🇧 ENGLISH VERSION

### 1. Define Prototype Objectives
- Clarify with your team the goal: pixel-perfect prototype or quick concept validation?
- Adapt the technical level based on the audience: Designer? Marketing? Developer?

### 2. Avoid Over-Engineering
- Don't over-develop the design, anticipate potential changes
- Stay flexible and maintain a simple architecture

### 3. Design Organization
- Segment your designs into logical feature groups (chunking)
- Structure the `design_links.md` file accordingly
- On the menu page, separate screens belonging to the same section with a divider

### 4. Screen Naming
- Always ask Claude Code to name your screens specifically
- This greatly simplifies future modifications

### 5. Time-Consuming Tasks
- Minor design adjustments via prompts
- Visual consistency across screens
- Managing links between pages

### 6. Prototype Navigation
- Create a home page listing all project screens
- Add each new screen to this list
- Implement double-tap detection to return to the initial screen

### 7. PWA Mobile Installation
To install a Progressive Web App (PWA) on your phone:
1. Ensure the app is accessible locally via `npm run start`
2. Once the app is running on port :3000, install ngrok: `npm install ngrok`
3. Run `ngrok http 3000` in your terminal
4. This generates a secure public URL (e.g., https://example.ngrok-free.app)
5. Open the ngrok link in your mobile browser
6. Tap the "Share" icon
7. Select "Add to Home Screen"

### 8. Optimal Design Workflow
- Design first on paper and Figma
- Then use Claude Code for prototyping
- This approach is faster than iteratively modifying a prototype through prompting

### 9. Post-Implementation Validation
- Always analyze the design after implementation
- Remember: AI can make mistakes
- If needed, list all changes in a single prompt

### 10. Developer Handoff
- This method provides an excellent way to hand off work to developers

### 11. Miscellaneous Notes
- **Design tokens**: Import tokens using the design tokens plugin
- **Icons**: Plan for icon imports
- **Error management**: Hard to predict, stay vigilant
- **Comments**: Use clear identifiers for comments (Dimitri's suggestion) 