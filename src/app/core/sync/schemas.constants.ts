import { PoSyncSchema } from '@po-ui/ng-sync';

const prodUrl = 'https://my-pets-backend.herokuapp.com/';
const localUrl = 'http://localhost:3000/';
const baseUrl = localUrl;

export const petSchema: PoSyncSchema = {
    getUrlApi: `${baseUrl}pets`,
    diffUrlApi: `${baseUrl}pets/diff`,
    deletedField: 'deleted',
    fields: [ 'id', 'name', 'species', 'birthdate' ],
    idField: 'id',
    name: 'Pets',
    pageSize: 10
};

export const medicinesSchema: PoSyncSchema = {
    getUrlApi: `${baseUrl}medicines`,
    diffUrlApi: `${baseUrl}medicines/diff`,
    deletedField: 'deleted',
    fields: [ 'id', 'name', 'dosage', 'date', 'description', 'next' ],
    idField: 'id',
    name: 'Medicines',
    pageSize: 10
};

export const schemas = [
    petSchema,
    medicinesSchema
];
