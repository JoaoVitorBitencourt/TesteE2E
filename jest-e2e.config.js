import jestConfig from  "./jest.config.js";


export default {
    ...jestConfig,
    testEnviroment: './prisma/prisma-test-enviroment.ts',
    testRegex: '.e2e-spec.ts$'
}