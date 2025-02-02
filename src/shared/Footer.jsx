import "./footer.css";
const Footer = () => {
  return (
    <footer className="bg-[#002244] text-white text-sm">
      <div className="container mx-auto p-12 flex justify-between items-center">
        <div className="text-[24px] font-bold">
          <img
            src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&auto=format"
            alt=""
          />
        </div>
        <div className="flex items-center gap-3">
          <p className="text-[#00dce0] text-[20px]  ">Our Solutions</p>
          <div class="custom-line3"></div>
          <a href="#" className="text-[#00dce0]  hover:text-blue-700">
            AnyCaaS
          </a>
          <a href="#" className="text-[#00dce0]  hover:text-blue-700">
            AnyBaaS
          </a>
          <a href="#" className="text-[#00dce0]  hover:text-blue-700">
            AnyPaaS
          </a>
        </div>
      </div>
      <div className="border-t bg-[#00152c]  border-gray-600 p-4">
        <div className="container mx-auto py-3 px-6 flex justify-between items-center text-xs">
          <p className="text-blue-500">
            ©2023{" "}
            <span className="font-bold text-blue-500">
              All rights reserved.
            </span>{" "}
            Any Technology Pte Ltd.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
