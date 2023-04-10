/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      createdAt
      updatedAt
      name
      owner
      description
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos {
    listTodos {
      id
      createdAt
      updatedAt
      name
      owner
      description
    }
  }
`;
