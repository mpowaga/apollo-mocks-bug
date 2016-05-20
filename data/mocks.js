import { MockList } from 'graphql-tools';
import casual from 'casual';

const mocks = {
  User: () => ({ name: casual.username }),
  Post: () => ({
    title: casual.word,
    authors: () => new MockList([1, 2])
  })
};

export default mocks;
