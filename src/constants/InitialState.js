import { v1 as uuidv1 } from 'uuid';

const INITIAL_STATE = [
  { id: uuidv1(), title: 'Shartered life', category: 'Action' },
  { id: uuidv1(), title: 'Rhoda and Lucky', category: 'Biography' },
  { id: uuidv1(), title: 'The journey of life and love', category: 'History' },
  { id: uuidv1(), title: 'Igodo', category: 'Horror' },
  { id: uuidv1(), title: 'John D in the jungle', category: 'Kids' },
  { id: uuidv1(), title: 'React and redux', category: 'Learning' },
  { id: uuidv1(), title: 'Nigeria', category: 'Sci-Fi' },
];

export default INITIAL_STATE;
