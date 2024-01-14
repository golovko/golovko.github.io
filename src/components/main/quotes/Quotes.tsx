import BlockTitle from '../BlockTitle';
import { QuoteText } from './QuoteText';
import { Quote } from './Quote';

const quotes: QuoteText[] = [
  {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, sequi?',
    author: 'Mark A, Emperor',
  },
  {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, sequi?',
    author: 'Seneka L, Philosopher',
  },
];

function Quotes() {
  return (
    <>
      <BlockTitle title='Quotes' />
      {quotes.map(quote => <Quote key={quote.description} quote={quote}/>)}
    </>
  );
}

export default Quotes
