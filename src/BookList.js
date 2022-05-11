import { BookEdit } from "./BookEdit";
import BookRow from "./BookRow";
import datas from './itemList';


function BookList(props) {

  const bookRows = [];
  for (const data of datas) {
    bookRows.push(
        <BookRow
          bookName={data.bookName}
          authorName={data.authorName}
          published={data.published}
          currency={data.currency}
          price={data.price}
          icon={data.icon}
        />
    );
  }

  return (
    <div>
      <table>
        <tr>
          <th>Book Name</th>
          <th>Author Name</th>
          <th>published Date</th>
          <th>Price</th>
          <th></th>
        </tr>
       {bookRows}
      </table>

      <BookEdit/>
    </div>
  )
}

export default BookList;