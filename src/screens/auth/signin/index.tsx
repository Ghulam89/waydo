import React from "react";
import { Modal } from "../../../components/common/Modal";
import { Button } from "../../../components/ui/button";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Signin: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      centered={true}
      className="max-w-lg w-full"
    >
      <div className="relative flex flex-col items-center text-center">
        <div className=" flex justify-end  w-full">
          <svg
            onClick={() => onClose()}
            className="cursor-pointer"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 5.29852L5 19.2985M5 5.29852L19 19.2985"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        {/* Logo */}
        <div className="">
          <img
            src={"public/logo.png"}
            alt="Waydo Logo"
            className="h-10 mx-auto"
          />
        </div>

        {/* Illustration */}
        <div className="">
          <img
            src="public/By my car-cuate.png"
            alt="Car Illustration"
            className="h-32 mx-auto"
          />
        </div>

        {/* Heading */}
        <h3 className="text-xl font-semibold mt-5 mb-6">
          Login to get started
        </h3>

        <div className=" px-6">
          {/* Login buttons */}
          <div className="w-full space-y-3">
            <Button className="flex gap-2 bg-transparent  text-base text-gray-700 items-center justify-center w-full border   hover:bg-gray-100">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_686_2037)">
                  <path
                    d="M20.8428 17.8463C20.5101 18.615 20.1163 19.3225 19.66 19.9729C19.0381 20.8597 18.5288 21.4735 18.1364 21.8144C17.528 22.3739 16.8762 22.6604 16.1782 22.6767C15.6771 22.6767 15.0728 22.5341 14.3693 22.2449C13.6636 21.957 13.015 21.8144 12.422 21.8144C11.8 21.8144 11.133 21.957 10.4195 22.2449C9.70493 22.5341 9.12928 22.6848 8.68916 22.6998C8.01981 22.7283 7.35264 22.4336 6.68668 21.8144C6.26164 21.4436 5.72999 20.8081 5.09309 19.9078C4.40976 18.9463 3.84796 17.8314 3.40784 16.5603C2.93648 15.1874 2.7002 13.8579 2.7002 12.5708C2.7002 11.0965 3.01878 9.82487 3.65689 8.75926C4.1584 7.90332 4.82557 7.22813 5.66059 6.73247C6.49562 6.2368 7.39786 5.98422 8.36949 5.96806C8.90114 5.96806 9.59833 6.13251 10.4647 6.45571C11.3287 6.78 11.8834 6.94445 12.1266 6.94445C12.3085 6.94445 12.9247 6.75216 13.9694 6.3688C14.9573 6.01328 15.7911 5.86607 16.4742 5.92406C18.3251 6.07344 19.7157 6.80308 20.6405 8.11761C18.9851 9.12062 18.1662 10.5255 18.1825 12.3276C18.1975 13.7314 18.7067 14.8995 19.7076 15.827C20.1611 16.2575 20.6676 16.5902 21.2312 16.8265C21.109 17.1809 20.98 17.5204 20.8428 17.8463ZM16.5978 1.14179C16.5978 2.24204 16.1958 3.26934 15.3946 4.2202C14.4277 5.35058 13.2582 6.00377 11.99 5.9007C11.9738 5.76871 11.9645 5.62979 11.9645 5.4838C11.9645 4.42756 12.4243 3.29718 13.2408 2.37293C13.6485 1.90497 14.167 1.51587 14.7957 1.20547C15.4231 0.899711 16.0166 0.730617 16.5747 0.70166C16.591 0.848747 16.5978 0.995842 16.5978 1.14177V1.14179Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_686_2037">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.701416)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Sign in with Apple
            </Button>

            <Button className="flex gap-2 bg-transparent  text-base text-gray-700 items-center justify-center w-full border   hover:bg-gray-100">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_686_4268)">
                  <path
                    d="M23.7663 12.9779C23.7663 12.1622 23.7001 11.342 23.559 10.5396H12.2402V15.1605H18.722C18.453 16.6509 17.5888 17.9693 16.3233 18.807V21.8054H20.1903C22.4611 19.7154 23.7663 16.6288 23.7663 12.9779Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12.2401 24.7022C15.4766 24.7022 18.2059 23.6396 20.1945 21.8053L16.3276 18.807C15.2517 19.5389 13.8627 19.9534 12.2445 19.9534C9.11388 19.9534 6.45946 17.8413 5.50705 15.0017H1.5166V18.0927C3.55371 22.1448 7.7029 24.7022 12.2401 24.7022Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.50277 15.0016C5.00011 13.5113 5.00011 11.8975 5.50277 10.4071V7.31616H1.51674C-0.185266 10.7069 -0.185266 14.7018 1.51674 18.0926L5.50277 15.0016Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M12.2401 5.45108C13.9509 5.42462 15.6044 6.06838 16.8434 7.25008L20.2695 3.82403C18.1001 1.78692 15.2208 0.66695 12.2401 0.702225C7.7029 0.702225 3.55371 3.25964 1.5166 7.31622L5.50264 10.4072C6.45064 7.56315 9.10947 5.45108 12.2401 5.45108Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_686_4268">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.701416)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Sign in with Google
            </Button>

            <Button className="flex gap-2 bg-transparent  text-base text-gray-700 items-center justify-center w-full border   hover:bg-gray-100">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_686_5908)">
                  <path
                    d="M24 12.7014C24 6.07399 18.6274 0.701416 12 0.701416C5.37258 0.701416 0 6.07399 0 12.7014C0 18.6909 4.3882 23.6554 10.125 24.5556V16.1702H7.07812V12.7014H10.125V10.0577C10.125 7.05017 11.9166 5.38892 14.6576 5.38892C15.9701 5.38892 17.3438 5.62329 17.3438 5.62329V8.57642H15.8306C14.34 8.57642 13.875 9.50149 13.875 10.4514V12.7014H17.2031L16.6711 16.1702H13.875V24.5556C19.6118 23.6554 24 18.6909 24 12.7014Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M16.6711 16.1702L17.2031 12.7014H13.875V10.4514C13.875 9.50243 14.34 8.57642 15.8306 8.57642H17.3438V5.62329C17.3438 5.62329 15.9705 5.38892 14.6576 5.38892C11.9166 5.38892 10.125 7.05017 10.125 10.0577V12.7014H7.07812V16.1702H10.125V24.5556C11.3674 24.75 12.6326 24.75 13.875 24.5556V16.1702H16.6711Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_686_5908">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.701416)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Sign in with Facebook
            </Button>

            <Button className="flex gap-2 bg-transparent  text-base text-gray-700 items-center justify-center w-full border   hover:bg-gray-100">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6.70142L8.91302 10.6184C11.4616 12.0624 12.5384 12.0624 15.087 10.6184L22 6.70142"
                  stroke="#FF0000"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.01577 14.177C2.08114 17.2426 2.11383 18.7753 3.24496 19.9108C4.37608 21.0462 5.95033 21.0858 9.09883 21.1649C11.0393 21.2136 12.9607 21.2136 14.9012 21.1649C18.0497 21.0858 19.6239 21.0462 20.7551 19.9108C21.8862 18.7753 21.9189 17.2426 21.9842 14.177C22.0053 13.1914 22.0053 12.2115 21.9842 11.2258C21.9189 8.16028 21.8862 6.62751 20.7551 5.49208C19.6239 4.35665 18.0497 4.31709 14.9012 4.23798C12.9607 4.18923 11.0393 4.18923 9.09882 4.23798C5.95033 4.31708 4.37608 4.35663 3.24495 5.49206C2.11382 6.6275 2.08114 8.16026 2.01576 11.2258C1.99474 12.2115 1.99475 13.1914 2.01577 14.177Z"
                  stroke="#FF0000"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
              Sign in with email
            </Button>
          </div>

          {/* Create Account */}
          <p className="mt-5 text-sm text-red-600">
            Don’t have an account?{" "}
            <a href="#" className="text-red-500 font-medium">
              Create one
            </a>
          </p>

          {/* Terms */}
          <p className="mt-4 text-xs text-gray-500">
            By signing up I agree to the{" "}
            <a href="#" className="text-blue-500">
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default Signin;
