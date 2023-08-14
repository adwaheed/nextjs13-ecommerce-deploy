"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import myData from "@/components/data";
import { useDispatch } from "react-redux";
import { add } from "@/Redux/Cartslice";

const Page = ({ params }) => {
  const [products, setproducts] = useState([]);
  const dispatch = useDispatch();
  // const getProducts = async () => {
  //   const response = await fetch("https://fakestoreapi.com/products");
  //   const data = await response.json();
  //   const menClothing = data.filter((product) => product.id === params.id);
  //   setproducts(menClothing);
  // };

  const getProducts = async () => {
    const productItem = myData.filter(
      (product) => product.id === parseInt(params.id)
    );
    setproducts(productItem);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleAdd = (item) => {
    dispatch(add(item));
  };
  return (
    <div>
      {products.map((item) => (
        <section key={item.id} className="py-5 sm:py-10">
          <div className="container mx-auto px-4">
            <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
              <div className="lg:col-span-3 lg:row-end-1 flex items-center justify-center">
                <div className="lg:flex lg:items-start">
                  <div className="lg:order-2 lg:ml-5">
                    <div className="max-w-xl overflow-hidden rounded-lg flex items-center justify-center -mt-20">
                      <Image
                        width={260}
                        height={250}
                        className="h-full w-full max-w-full object-cover "
                        src={item.image}
                        alt={"productid-" + item.id}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2 -mt-5">
                <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                  {item.title}
                </h1>

                <div className="mt-5 flex items-center">
                  {Math.round(item.rating.rate) === 4 && (
                    <>
                      {" "}
                      <AiFillStar color="gold" size={20} />
                      <AiFillStar color="gold" size={20} />
                      <AiFillStar color="gold" size={20} />
                      <AiFillStar color="gold" size={20} />
                      <AiOutlineStar color="gold" size={20} />
                    </>
                  )}
                  {Math.round(item.rating.rate) === 3 && (
                    <>
                      {" "}
                      <AiFillStar color="gold" size={20} />
                      <AiFillStar color="gold" size={20} />
                      <AiFillStar color="gold" size={20} />
                      <AiOutlineStar color="gold" size={20} />
                      <AiOutlineStar color="gold" size={20} />
                    </>
                  )}
                  {Math.round(item.rating.rate) === 2 && (
                    <>
                      {" "}
                      <AiFillStar color="gold" size={20} />
                      <AiFillStar color="gold" size={20} />
                      <AiOutlineStar color="gold" size={20} />
                      <AiOutlineStar color="gold" size={20} />
                      <AiOutlineStar color="gold" size={20} />
                    </>
                  )}
                  {Math.round(item.rating.rate) === 1 && (
                    <>
                      {" "}
                      <AiFillStar color="gold" size={20} />
                      <AiOutlineStar color="gold" size={20} />
                      <AiOutlineStar color="gold" size={20} />
                      <AiOutlineStar color="gold" size={20} />
                      <AiOutlineStar color="gold" size={20} />
                    </>
                  )}
                  {item.rating.rate}
                </div>

                <div className="mt-5 flex items-center">{item.description}</div>

                <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                  <div className="flex items-end">
                    <h1 className="text-3xl font-bold">${item.price}</h1>
                  </div>

                  <button
                    onClick={() => handleAdd(item)}
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-slate-800 bg-none px-12 py-3 text-center text-base font-bold  transition-all duration-200 ease-in-out focus:shadow-lg hover:shadow-lg text-[gold] hover:bg-[gold] hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 mr-3 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    Add to Cart
                  </button>
                </div>

                <ul className="mt-8 space-y-2">
                  <li className="flex items-center text-left text-sm font-medium text-gray-600">
                    <svg
                      className="mr-2 block h-5 w-5 align-middle text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        className=""
                      ></path>
                    </svg>
                    Free shipping worldwide
                  </li>

                  <li className="flex items-center text-left text-sm font-medium text-gray-600">
                    <svg
                      className="mr-2 block h-5 w-5 align-middle text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        className=""
                      ></path>
                    </svg>
                    Cancel Anytime
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Page;
