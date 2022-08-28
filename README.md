 

<div>
  <a href="https://torinit.com/" align="left" style="margin-left: 0;">
    <img src="https://torinit.com/static/media/loader.e1dc4171.gif">
  </a>
  <p>
    <h1 align="left">React Template
    </h1>
  </p>

  <p>
An enterprise react template application showcasing -   Global state management,  a network layer, component library integration,   route configuration, lazy loading
  </p>

---

  
 
---

</div>

 
  

## Getting Started

- Install dependencies using `yarn install`

- Start the dev server using `yarn start`

- Go through the other scripts in `package.json`

## Global state management using reduxSauce

- Global state management using [Redux Sauce](https://github.com/infinitered/reduxsauce)
  
 ## Network requests using Axios

- API calls using [Axios](https://github.com/axios/axios)
 

## Styling using styled-components

- Styling components using [Styled Components](https://styled-components.com)
 

## Using antd as the component library

- Reusing components from [Ant design](https://ant.design)

## Routing using react-router

- Routing is done using [React Router](https://github.com/ReactTraining/react-router)
 

## Creating and showcasing components individually and in isolation using Storybooks

- Storybooks allows you to work on one component at a time. You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application.

   

## Bundling your application using [ReactAppRewired](https://www.npmjs.com/package/react-app-rewired)

- We're using and configuring webpack to bundle our React application.

  Take a look at the following files

  - [config-overrides.js](config-overrides.js) 
   
## Testing using [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)

- Testing is done using the @testing-library/react.
  

## Following Atomic Design Pattern
  <img src="https://miro.medium.com/max/1400/1*PcQ-m317YX6ct9ccBi6H1Q.png" />

 - Atoms:

   Basic building blocks of matter, such as a button, input or a form label. They’re not useful on their own.

- Molecules:

  Grouping atoms together, such as combining a button, input and form label to build functionality.

- Organisms:

  Combining molecules together to form organisms that make up a distinct section of an interface (i.e. navigation bar)

- Templates:

  Consisting mostly of groups of organisms to form a page — where clients can see a final design in place.

- Pages:

  An ecosystem that views different template renders. We can create multiple ecosystems into a single environment — the application.





 
### Aliasing
 
 ```{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@ability/*":[
        "src/ability/*"
      ],
      "@assets/*": [
        "src/assets/*"
      ],
      "@constants/*": [
        "src/constants/*"
      ],
      "@components/*": [
        "src/shared/components/*"
      ],
      "@atom/*": [
        "src/shared/atom/*"
      ],
      "@molecules/*": [
        "src/shared/molecules/*"
      ],
      "@organism/*": [
        "src/shared/organism/*"
      ],
      "@constant/*": [
        "src/shared/constant/*"
      ],
      "@icons/*": [
        "src/shared/icons/*"
      ],
      "@layout/*": [
        "src/layout/*"
      ],
      "@Layout/*": [
        "src/shared/Layout/*"
      ],
      "@redux/*": [
        "src/redux/*"
      ],
      "@utils/*": [
        "src/utils/*"
      ],
      "@pages/*": [
        "src/pages/*"
      ],
      "@services/*": [
        "src/services/*"
      ],
      "@store/*": [
        "src/store/*"
      ],
      "@hooks/*": [
        "src/hooks/*"
      ]
    }
  }
}
```


Take a look at the following files

- [tsconfig.paths.json](tsconfig.paths.json)
    
