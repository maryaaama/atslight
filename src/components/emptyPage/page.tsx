import NavBar from "../navBar/navBar";
const EmptyPage = () => {
  return (
    <main>
      <NavBar name={"عدم وجود اطلاعات"} />
      <div className="w-full border-b border-t">
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">اطلاعاتی وجود ندارد</h1>
            <p className="text-xl">در حال حاضر اطلاعاتی جهت نمایش وجود ندارد</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EmptyPage;
