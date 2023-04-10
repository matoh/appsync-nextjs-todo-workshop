import { Text, Card, CardBody, HStack, Stack, Heading, Button, Input, FormControl, Flex } from '@chakra-ui/react';
import React, { useReducer, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { v4 as uuid } from 'uuid';
import { gql, useMutation } from '@apollo/client';
import { listTodos } from '../graphql/queries';
import { addTodo } from '../graphql/mutations';
import { ApolloGraphQLClient } from '../services/ApolloGraphQLClient';
import { getToken } from 'next-auth/jwt';
import useColorModeValue from '../hooks/useColorModeValue';

/**
 * Fetch todo list on server side by using Apollo GraphQL client
 * @param context
 */
export async function getServerSideProps(context: any) {
  let todoItems = [];
  const jwtToken = await getToken(context);

  if (jwtToken) {
    const graphQLClient = ApolloGraphQLClient(jwtToken.access_token);
    const { data } = await graphQLClient.query({ query: gql(listTodos) });
    todoItems = data.listTodos;
  }

  return {
    props: {
      storedTodoItems: todoItems
    }
  };
}

enum ActionType {
  ADD_ITEM = 'addItem',
  DELETE_ITEM = 'deleteItem'
}

interface ActionAddItem {
  type: ActionType.ADD_ITEM;
  todo: TodoItem;
}

interface ActionDeleteItem {
  type: ActionType.DELETE_ITEM;
  id: string;
}

type ActionTypes = ActionAddItem | ActionDeleteItem;

function reducer(todoItems: TodoItem[], action: ActionTypes): TodoItem[] {
  switch (action.type) {
    case ActionType.ADD_ITEM:
      return [...todoItems, action.todo];
    case ActionType.DELETE_ITEM:
      return todoItems.filter((todoItem) => todoItem.id !== action.id);
  }
}

export interface TodoItem {
  id: string;
  name: string;
  description?: string;
}

/**
 * Todo APP, fetching items from Dynamo DB by using GraphQL and AppSync. Todo App is workshop
 * and it not finished as not all operation are implemented by using GraphQL
 * @param storedTodoItems
 */
export default function Home({ storedTodoItems }: { storedTodoItems: [] }) {
  const [todoItems, dispatch] = useReducer(reducer, storedTodoItems);
  const [newItem, setNewItem] = useState('');
  const { color } = useColorModeValue();
  const [addTodoIntoList] = useMutation(gql(addTodo));

  const addNewItem = () => {
    if (newItem) {
      // Example implementation of creating TODO item and storing it into DynamoDB
      addTodoIntoList({
        variables: {
          input: {
            name: newItem,
            description: '-',
            owner: 'example',
            createdAt: '2023-07-24',
            updatedAt: '2023-07-24'
          }
        }
      });
      dispatch({ type: ActionType.ADD_ITEM, todo: { id: uuid(), name: newItem } });
      setNewItem('');
    }
  };

  return (
    <Stack spacing='5'>
      <Heading my='4' size='lg' textAlign='center'>
        Task List
      </Heading>
      {todoItems.map((item) => (
        <Card
          key={item.id}
          boxShadow='md'
          border='2px'
          borderColor={color('gray.200', 'gray.800')}
          backgroundColor={color('white', 'gray.700')}
        >
          <CardBody p='3'>
            <Flex alignItems='center' justifyContent='space-between'>
              <Text color={color('black', 'white')}>
                {item.name} - {item.description}
              </Text>
              <Button onClick={() => dispatch({ type: ActionType.DELETE_ITEM, id: item.id })}>
                <FaTrash />
              </Button>
            </Flex>
          </CardBody>
        </Card>
      ))}
      <HStack>
        <FormControl>
          <Input
            value={newItem}
            onChange={(event) => setNewItem(event.target.value)}
            onKeyDown={(event) => event.key === 'Enter' && addNewItem()}
            type='text'
            backgroundColor={color('white', 'gray.700')}
            placeholder='Add new item'
          />
        </FormControl>
        <Button
          color={color('white', 'black')}
          bg={color('gray.700', 'gray.300')}
          _hover={{
            bg: color('gray.600', 'gray.200')
          }}
          onClick={addNewItem}
        >
          Add Item
        </Button>
      </HStack>
    </Stack>
  );
}
