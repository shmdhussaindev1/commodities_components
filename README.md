# Commodities List component Demo


**DEMO URL:** https://ticker-demo.vercel.app/


This is the demo project created for showing how can we use the ticker react component to move the items as in snabusiness.com latest news ticker.

This is NextJS Project, to run the project do

    + clone the repo
    + `npm i`
    + then do either 'npm run dev` or
    + `npm run build` followed by ` npm run start`
    + then open the url `http://localhost:3000` in the browser

This ticker component can be used as below, in this example it is used in `pages/index.js`

    `<CommoditiesList componentData={dummyData}></CommoditiesList>`

Here
    componentData --> data to be used to iterate and dispaly in the table, see the dummyData/commoditiesList.json folder for data reference

## Prerequisties

    + make sure page is having `direction:rtl` set for `html` and `body` elements

```css

    html,body {
        direction: rtl;
    }

```
    + all the elements have `box-sizing:border-box`

```css

    * {
        box-sizing: border-box;
    }

```


## Files to include

`<CommoditiesList>` component folder including the scss/css files


I Used SCSS for compilation so i used sass pkg

Here instead of API call , I used dummyData/commoditiesList.json file

Other files are for demo purpose only, not required for projects

## Note:

comments are provided in the css and component js files
