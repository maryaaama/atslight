import React, { ChangeEvent, useState } from "react";
import NavBar from "../../components/navBar/navBar";
import DefaultImage from "../../image/upload.png";
import { Link } from 'react-router-dom';
import LoadingButton from "../../components/button/LoadingButton.jsx";
import { useCreatePresignedUploadLinkMutation, useCreateCompanyMutation, Language, CompanyCategory, CompanySize } from "../../graphql/generated/graphql";

export default function Company() {
  const [file, setFile] = useState(DefaultImage);
  const [business, setBusiness] = useState("");
  const [isClick, setIsClick] = useState(false);

  const [CreatePresignedUploadLinkMutation] = useCreatePresignedUploadLinkMutation();
  const [createCompanyMutation] = useCreateCompanyMutation();

  const clickHandler = async () => {
    try {
      // Your logic for presigned upload link (if needed)
      // await CreatePresignedUploadLinkMutation();

      // Call the CREATE_COMPANY mutation here
      await createCompanyMutation({
        variables: {
          input: {
            translations: [{ name: business, lang: Language.Fa }],
            category:CompanyCategory.Retailer,
            companySize: CompanySize.MoreThan_200,
            languages: [Language.Fa]
          },
        },
      });

      // Continue with other logic after successful mutation
    } catch (error) {
      console.error("Error creating company:", error);
      // Handle error if necessary
    }
  };

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0];
    console.log(selectedFile);

    if (selectedFile) {
      if (selectedFile.type.startsWith("image/")) {
        setFile(URL.createObjectURL(selectedFile));
      } else {
        alert("فایل نامعتبر!!! لطفا فایل با فرمت درست را وارد کنید");
      }
    }
  }

  return (
    <div className="h-screen w-screen">
      <NavBar name={"ساخت حساب کاربری"} />
      <form
        action="post"
        className="h-screen max-md:w-screen max-w-xl mx-auto md:my-32"
      >
        <div className="flex mt-4 flex-col gap-4 mx-6">
          <p className="">تصویر لوگو</p>
          <div className="shadow-xl w-fit rounded-lg">
            <section className="container w-fit items-start border border-gray1 border-dashed rounded-lg">
              <label htmlFor="upload" className="cursor-pointer">
                <input
                  type="file"
                  onChange={handleChange}
                  id="upload"
                  className="hidden"
                />
                <img
                  src={file}
                  alt="logo"
                  className="p-2 w-44 h-40"
                />
              </label>
            </section>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="business">نام تجاری</label>
            <input
              type="text"
              className="shadow-sm border-2 border-gray1 rounded-lg p-2 outline-none focus:border-gray2"
              name="business"
              id="business"
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
            />
          </div>
          <Link
            className="my-4"
            to={"/organization"}
          >
            <button
              onClick={() => clickHandler()}
              className={
                "p-3 font-bold flex items-center justify-center w-full bg-primary text-white border border-gray1 rounded-lg shadow"
              }
            >
              {isClick ? <LoadingButton /> : "ذخیره"}
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
