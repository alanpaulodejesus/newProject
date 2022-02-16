const faker = require('faker');

export const guid = faker.random.uuid()
export const getNumber = faker.phone.phoneNumber()

export const baseUrlConexao = `${Cypress.env('baseUrlDnit')}`

