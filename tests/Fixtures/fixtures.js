/*import {test as base} from 'playwright-bdd'
import {envpage} from '../Pages/envpage'

export const test = base.extend({
Envpagelogin: async({page}, use) => {

const envloginpage = new envpage(page);
await use(envloginpage);
}

})


/*const { envpage } = Pages

const createTestFunction = (PageClass) => async ({page}, use) => {

    await use (new PageClass(page));

}

export const test = base.extend({

    Envpage : createTestFunction(envpage)



});*/