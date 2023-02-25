# Objectif

Créer un site affichant le top 100 des cryptomonnaies (classées par marketcap) à jour avec une sélection d’informations utiles (prix unitaire, évolution durant les dernières 24 heures, liens,…).

Une version V1 est en ligne : https://blockchain-zero.netlify.app/

## Etapes

Tout d’abord recherche d’une API fiable et gratuite pour sourcer nos informations : CoinGecko API (https://www.coingecko.com/en/api/documentation)

Création d’une page d’accueil affichant directement le top 100, avec :

    -	dans le header : un menu permettant de naviguer vers les autres pages du site et de retrouver plusieurs liens vers d’autres sites
    -	pour le footer : un disclaimer avec une mise en garde concernant les informations fournies 

Les cryptomonnaies s’affichent par défaut classées par marketcap. Chaque cryptomonnaie est présentée dans une card affichant une courte synthèse des informations fournies par l’API 

## Moyens utilisés :

    React
        -	create react app
        -	react-dom
        -	react-router-dom

    Bootstrap

    Packages (utilisation de yarn)
        -	classnames


### Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
