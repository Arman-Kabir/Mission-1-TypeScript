/*
    ##### 1 -Installation typescript , nvm & ts-node-dev
    ------------------------------------
    #NVM (Manages node versions for different projects)
        nvm --v
        nvm list
        nvm install 18.16.0
        nvm use 18.16.0


    #TypeScript
        npm install -g typescript
        tsc --v
        tsc is typescript compiler that converts the typescript code to javascript

        to run ts file--** tsc .\index.ts  (converts to equivalent js file)

        **tsc --init  (to initilize ts configuration file--tsconfig.json)

    #to create package.json file
        npm init -y
    #nodemon(as dev dependency)
        npm i -D nodemon

    #ts-node-dev ( runs ts file in node environment )
        npm i ts-node-dev --save-dev


    #ts files in separate folder(to do this i need to configure tsconfig.json file)
        search -- rootDir and add "./src"

    #js files in separate folder(to do this i need to configure tsconfig.json file)
        search -- outDir and add "./dist"



    ###2 Primitive types in typescript
    -------------------------------------

    // Primitive Types
        //string
        //number
        //boolean
        //null
        //undefined
     we're declaring types in ts, it's called explicit type.

     ts can infer automatically thats called inference or implicit type.


    ###3 Array and Tuples in typescript
    -------------------------------------
        we will know reference type in ts - most common reference type is -- array.

        tuple is special type of array.


    ###4 Object, Literal Types and Optional types
    --------------------------------------------
        optional chaining ?
        literal type



    ###5 Functions in Typescript
    -----------------------------------
        "noImplicitAny": true,  -->

        *if function is used between objects, then it's called method
*/