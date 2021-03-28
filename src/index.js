import FluentSQLBuilder from './fluentSQL.js';
import Database from '../database/data.json';

const result = FluentSQLBuilder.for(Database)
.where({ registered: /^(2020|2019)/ })
.where({ category: /^(security|developer|quality assurance)$/ })
.where({ phone: /\((852|850|810)\)/ })
.select(['category', 'name', 'company', 'registered'])
.orderBy('category')
.limit(2)
.build();

console.table(result);
