import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Heading from '../Heading';



const AdminDescriptionModal = ({description}) => {
  
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
    <div className='w-1/2'>
      <button onClick={openModal}>Leer aqui...</button>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between p-4 md:p-5  rounded-t dark:border-gray-600">

                    <Heading title={"Descripción del evento"} logo={false} />
                    <button type="button" onClick={closeModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="p-4 md:p-5 space-y-4">
                 {description}
                </div>
                <div className="flex items-center p-4 md:p-5  rounded-b dark:border-gray-600">
                    <button onClick={closeModal} type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Salir</button>
                </div>
            </div>
        </div>
      </Modal>
    </div>

  )
}





const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },
    textarea: {
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 300
    }
  
  
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

export default AdminDescriptionModal