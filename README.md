# Personal Portfolio
Hosted on vercel : https://muhammed-fazil-k.vercel.app/ 
### Frontend    : NextJs 13 
### Backend     : Firebase and firestore 
### Authentication  :Firebase Authentication
### React technologies  :useContext,useEffect,useState 
## Color palette
- White (#FFFFFF): primary background color.
- Dark Gray (#333333):Use this for text, headings
- Light Gray (#CCCCCC): A slightly lighter gray can be used for secondary text.
- Accent Color 1 (e.g., Blue #0074CC): Choose a vibrant color for buttons, links, and other interactive elements to make them stand out against the white background.
- Accent Color 2 (e.g., Red #FF4136): Another contrasting color for important call-to-action buttons or highlights.
- Subtle Accent Color (e.g., Light Blue #AEDFF7): A lighter shade of your accent color for hover effects or subtle highlights.
- Footer Color (e.g., Dark Gray #222222): A darker color for the footer area to visually separate it from the main content.

# Issues faced
- How to implement login functionality ?
  - Used http only session cookie to store jwt which will be receiving from backend -strapi(v1)
  - Coundln't deploy with strapi as backend . Migrated to firebase for authentication purpose . Here the logic was different . Creted a context for managing user . Firebase have its own built it user state management . Built authentication based on that

- Deployment
  - It was very headache for me to choose a platform from many . Watched a lot of tutorials and finally thought will host my application in [Vercel](https://vercel.com).
  - While i was developing , i used to hard code url. After deploying some functionalities didn't work as expected. After debugging for some time 🙂 decided to create a config file for storing base url . It will take proper url value from env variable or by default will consider localhost