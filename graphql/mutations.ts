/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addTodo = /* GraphQL */ `
  mutation AddTodo($input: TodoInput) {
    addTodo(input: $input) {
      id
      createdAt
      updatedAt
      name
      owner
      description
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo($input: TodoInput) {
    updateTodo(input: $input) {
      id
      createdAt
      updatedAt
      name
      owner
      description
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
      createdAt
      updatedAt
      name
      owner
      description
    }
  }
`;
