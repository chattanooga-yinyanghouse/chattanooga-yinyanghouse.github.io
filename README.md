# Chattanooga Yin Yang House Site

## Initial Setup
```
docker compose --env-file ./dev-api.env -f ./docker-compose-dev-startnewastro.yml up -d
docker exec -it chatt-yyh-front /bin/bash
# setup astro as needed in the /app directory
# generally used https://ui.shadcn.com/docs/installation/astro
    1  npm create astro@latest
    2  npx astro add react
    3  npx astro add tailwind
    4  npx shadcn@latest init
    5  npx shgadcn@latest add button
    6  npx shadcn@latest add button
    7  npx shadcn@latest add separator
    8  npx shadcn@latest add navigation-menu
    9  npx shadcn@latest add card
   10  npx shadcn@latest add breadcrumb
   11  npx shadcn@latest add accordion
```


