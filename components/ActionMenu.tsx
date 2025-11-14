interface ActionMenuProps{
  handleEdit: () => void
  handleDelete: () => void
}
const ActionMenu = ({handleEdit, handleDelete}: ActionMenuProps) => {
  return (
    <div className="absolute right-0 top-8 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[120px] z-10">
      <button
        onClick={handleEdit}
        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors"
      >
        Edit
      </button>
      <button
        onClick={handleDelete}
        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors"
      >
        Delete
      </button>
    </div>
  );
};

export default ActionMenu;
