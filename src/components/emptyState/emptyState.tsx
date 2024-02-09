const EmptyState = () => {
  return (
    <main className="w-full h-full">
      <div className="flex items-center justify-center border rounded-lg shadow-sm">
        <div className="text-center m-6">
          <h1 className="text-3xl font-bold mb-4">اطلاعاتی وجود ندارد</h1>
          <p className="text-lg">در حال حاضر اطلاعاتی جهت نمایش وجود ندارد</p>
        </div>
      </div>
    </main>
  );
};

export default EmptyState;
