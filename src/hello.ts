import {graphql} from 'graphql';
import 'reflect-metadata';
import {buildSchemaSync} from 'type-graphql';

import RecipeResolver from './RecipeResolver';
import ResolveContainer from './ResolverContainer';

const schema = buildSchemaSync({
  resolvers: [RecipeResolver],
  container: ResolveContainer,
  validate: false // https://github.com/MichalLytek/type-graphql/issues/150
});

graphql(schema, '{ recipes { title }}').then(result => {
  console.log(JSON.stringify(result));
});

graphql(schema, '{ recipe(id:"111") { title }}').then(result => {
  console.log(JSON.stringify(result));
});

graphql(schema, '{ searchRecipes(keyword:"00") { title }}').then(result => {
  console.log(JSON.stringify(result));
});
