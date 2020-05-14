import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Achievement} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Achievement,
  pattern: 'CrudRest',
  dataSource: 'database',
  basePath: '/achievements',
};
module.exports = config;
