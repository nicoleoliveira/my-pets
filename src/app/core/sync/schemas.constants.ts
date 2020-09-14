import { PoSyncSchema } from '@po-ui/ng-sync';

export const petSchema: PoSyncSchema = {
    getUrlApi: 'http://localhost:3000/pets',
    diffUrlApi: 'http://localhost:3000/pets/diff',
    deletedField: 'deleted',
    fields: [ 'id', 'name', 'species', 'birthdate' ],
    idField: 'id',
    name: 'Pets',
    pageSize: 10
};

export const schemas = [
    petSchema
];
