import { useState } from "react";
import { addBook } from "../service";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    publisher: "",
    language: "",
    genre: "",
    price: "",
    pages: "",
    totalQuantity: "",
    availableQuantity: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("book", JSON.stringify(book));
    formData.append("image", image);

    await addBook(formData);
    alert("Book added successfully");
  };

  return (
    <div className="text-white border-2 border-gray-200">
      

      <form
        onSubmit={handleSubmit}
        className=" p-6 rounded-xl shadow-2xl grid grid-cols-2 gap-4"
      >
        <input name="title" placeholder="Title" onChange={handleChange} className="input" />
        <input name="author" placeholder="Author" onChange={handleChange} className="input" />
        <input name="publisher" placeholder="Publisher" onChange={handleChange} className="input" />
        <input name="language" placeholder="Language" onChange={handleChange} className="input" />
        <input name="genre" placeholder="Genre" onChange={handleChange} className="input" />
        <input name="price" type="number" placeholder="Price" onChange={handleChange} className="input" />
        <input name="pages" type="number" placeholder="Pages" onChange={handleChange} className="input" />
        <input name="totalQuantity" type="number" placeholder="Total Quantity" onChange={handleChange} className="input" />
        <input name="availableQuantity" type="number" placeholder="Available Quantity" onChange={handleChange} className="input" />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="col-span-2 input h-24"
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="input"
        />

        <button className="col-span-2 bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
