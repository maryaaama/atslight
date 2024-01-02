const PersonalCardList = () => {
    return ( 
        <div>
          <div className="list-item list-none justify-between py-2 px-1 text-right">
            <span className="person-name text-lg font-bold">شهر: </span>
            <span className="name text-base">تهران</span>
          </div>
          <div className="list-item list-none justify-between py-2 px-1 text-right">
            <span className="person-name text-lg font-bold">محدوده محل کار: </span>
            <span className="name text-base">اکباتان</span>
          </div>
          <div className="list-item list-none justify-between py-2 px-1 text-right">
            <span className="person-name text-lg font-bold">سابقه: </span>
            <span className="name text-base">۱۰سال</span>
          </div>
          <div className="list-item list-none justify-between py-2 px-1 text-right">
            <span className="person-name text-lg font-bold">وضعیت سربازی: </span>
            <span className="name text-base">معافیت</span>
          </div>
          <div className="list-item list-none justify-between py-2 px-1 text-right">
            <span className="person-name text-lg font-bold">جنسیت کارجو: </span>
            <span className="name text-base">مرد</span>
          </div>
          <div className="list-item list-none justify-between py-2 px-1 text-right">
            <span className="person-name text-lg font-bold">سن کارجو: </span>
            <span className="name text-base">۲۴</span>
          </div>
        </div>
     );
}
 
export default PersonalCardList;