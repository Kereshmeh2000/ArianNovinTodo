import './modal.css'
import { closeModal } from '../../redux/modalSlice';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/taskSlice';

export default function Modal({id}) {
  const handleDeleteAndCloseModal = () => {
    dispatch(deleteTask(id));
    dispatch(closeModal());
  };

  const dispatch = useDispatch()
  return (
    <>
      <div className="modal-container">
        <div className="modal-part">
          <h4 className="text-white text-4xl">
            آیا میخواهید این وظیفه را حذف کنید؟
          </h4>
          <div className="d-flex align-items-center justify-content-around">
            <button
              className="border border-white py-2 px-6 m-4 text-white text-lg"
              onClick={() =>dispatch(closeModal())}
            >
              لغو
            </button>
            <button
              className="border border-white py-2 px-6 m-4 text-white text-lg"
              onClick= {handleDeleteAndCloseModal}
            >
              بله
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
