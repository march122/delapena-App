
import React, { useState } from "react";
import Book from "./Book";
import SearchFilter from "./SearchFilter";

const initialBooks = [
  {
    title: "Harry Potter",
    author: "Vince",
    dueDate: "1994-02-12",
    status: "Checked Out",
  },
  {
    title: "Hanz Place",
    author: "James",
    dueDate: "2022-01-14",
    status: "Checked Out",
  },
  {
    title: "No Mans",
    author: "Rolando",
    dueDate: "2012-02-10",
    status: "Checked Out",
  },
  {
    title: "King Arthur",
    author: "Adrianna",
    dueDate: "2005-07-11",
    status: "Checked Out",
  },
  {
    title: "Exception",
    author: "LOLO",
    dueDate: "2022-04-25",
    status: "Checked Out",
  },
  {
    title: "Nothings",
    author: "Nope;",
    dueDate: "2024-02-6",
    status: "Checked Out",
  },
  {
    title: "BillyBoy",
    author: "Onil",
    dueDate: "2019-08-05",
    status: "Checked Out",
  },
  {
    title: "The Tapulan",
    author: "March",
    dueDate: "2024-03-01",
    status: "Checked Out",
  },
  {
    title: "King Nai",
    author: "Rodulfo",
    dueDate: "2023-02-08",
    status: "Checked Out",
  },
  {
    title: "NoBody",
    author: "Akon",
    dueDate: "2023-05-05",
    status: "Checked Out",
  },
];

const Books = () => {
  const [books, setBooks] = useState(initialBooks);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleStatus = (index) => {
    setBooks((prevBooks) =>
      prevBooks.map((book, i) =>
        i === index
          ? {
              ...book,
              status: book.status === "Available" ? "Checked Out" : "Available",
            }
          : book
      )
    );
  };

  const filteredBooks = books
    .map((book, index) => ({ ...book, originalIndex: index }))
    .filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.dueDate.includes(searchQuery) ||
        book.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="table-container">
      <h1>Book List</h1>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Author</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <Book
                key={index}
                book={book}
                toggleStatus={() => toggleStatus(book.originalIndex)}
                index={index}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
