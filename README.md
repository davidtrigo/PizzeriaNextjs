This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```



Para la creación del archivo config privado

1. En la consola escribir el siguiente comando  /guardarlo p.e. en c:/keys/pizzeria.json

SETX  CLOUDINARY  keysecret

keysecret , valor de la key secret que te da cloudinary


2. el archivo pizzeria.json  tiene la siguiente estructura 

 {
	"secret": "xxxxxxxxxxx",
    "profit": 1.05,
    "cloudinarySecret": "xxxxxxxxxxxxxx",
	"algoliaApplicationID":"xxxxxxxxxxxxxxx",
	"algoliaSecret":"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  }
  
  

3. reinciar cmd el  IDE 




Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
