import { useState } from 'react';
import PageFormatter from '../../components/common/PageFormatter';

export default function ModalLearn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <PageFormatter>
      <button
        onClick={openModal}
        className="bg-blue-500 p-2 rounded-lg hover:bg-blue-600"
      >
        Open Modal
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          {/* Modal Box */}
          <div
            className="bg-white rounded-lg p-6 w-full max-w-md text-bg"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicked inside modal box
          >
            <h2 className="text-xl font-bold mb-4">Edit Stock</h2>

            {/* Form Inputs */}
            <div className="flex flex-col gap-4 mb-4">
              <div className="flex flex-col">
                <label
                  htmlFor="productName"
                  className="text-sm font-medium text-gray-700 mb-1"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="productName"
                  placeholder="Enter product name"
                  className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="stockQuantity"
                  className="text-sm font-medium text-gray-700 mb-1"
                >
                  Stock Quantity
                </label>
                <input
                  type="number"
                  id="stockQuantity"
                  placeholder="Enter stock quantity"
                  className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-2">
              <button
                onClick={closeModal}
                className="bg-red-500 p-2 rounded-lg text-white hover:bg-red-600"
              >
                Cancel &times;
              </button>
              <button
                onClick={closeModal}
                className="bg-green-500 p-2 rounded-lg text-white hover:bg-green-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </PageFormatter>
  );
}
