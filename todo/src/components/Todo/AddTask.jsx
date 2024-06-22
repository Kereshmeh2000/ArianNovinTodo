import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, setFilter, themeMode } from "../../redux/taskSlice";
import { Link } from 'react-router-dom';

// Adding New Task
const AddTask = () => {
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const { theme, filter } = useSelector((state) => state.tasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.length === 0) {
      alert("لطفا فیلد را پر کنید");
    } else {
      dispatch(addTask(description));
      setDescription("");
    }
  };

  // Changing THe Theme
  useEffect(() => {
    document.body.className = theme === 'light' ? 'light' : 'dark';
  }, [theme]);

  const handleChangeTheme = () => {
    dispatch(themeMode());
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <button onClick={handleChangeTheme} className="border border-custom-purple test-custom-purple dark:bg-custom-purple2 dark:text-white py-2 px-4 m-5 rounded">
        تغییر تم
      </button>
      <select
        onChange={handleFilterChange}
        value={filter}
        className="rounded p-2 border border-custom-purple test-custom-purple dark:bg-custom-purple2 dark:text-white"
      >
        <option value="همه">مشاهده همه وظایف</option>
        <option value="انجام نشده">انجام نشده</option>
        <option value="در حال انجام">در حال انجام</option>
        <option value="انجام شده">انجام شده</option>
      </select>
      <Link to={'/nasa-api'} className="border border-custom-purple test-custom-purple dark:bg-custom-purple2 dark:text-white rounded py-2 px-4 m-5">
        API مشاهده
      </Link>
      <h1 className="text-3xl font-medium text-custom-purple dark:text-white text-center mt-10">
        لیست وظایف
      </h1>
      <div className="flex items-center justify-center mt-10">
        <form onSubmit={handleSubmit}>
          <input
            className="px-4 rounded py-2 text-right border border-custom-purple test-custom-purple dark:bg-custom-purple2 dark:text-white"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="افزودن وظیفه جدید"
          />
          <button type="submit" className="border border-custom-purple test-custom-purple dark:bg-custom-purple2 dark:text-white px-6 rounded py-2 mr-5">
            افزودن
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTask;
