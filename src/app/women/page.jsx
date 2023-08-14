"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import myData from "@/components/data";
import { useDispatch } from "react-redux";
import { add } from "@/Redux/Cartslice";

const page = () => {
  const [products, setproducts] = useState([]);
  const dispatch = useDispatch();
  // const getProducts = async () => {
  //   const response = await fetch("https://fakestoreapi.com/products");
  //   const data = await response.json();
  //   const menClothing = data.filter(
  //     (product) => product.category === "women's clothing"
  //   );
  //   setproducts(menClothing);
  // };

  const getProducts = async () => {
    const menClothing = myData.filter(
      (product) => product.category === "women's clothing"
    );
    setproducts(menClothing);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleAdd = (item) => {
    dispatch(add(item));
  };

  return (
    <div className="flex flex-wrap px-10 py-10 gap-3 items-center justify-center">
      {products.map((item) => (
        <section
          key={item.id}
          className="group/main border-2 rounded-lg border-gray-200 hover:border-[gold] ease-in duration-200 hover:shadow-xl bg-white text-slate-800 w-[350px] mb-5"
        >
          <div className="">
            <div className="">
              <div className="relative flex flex-col overflow-hidden rounded-lg shadow-lg">
                <Link href={`/product/${item.id}`}>
                  <div className="aspect-square overflow-hidden ">
                    <Image
                      width={200}
                      height={200}
                      className="h-full w-full object-contain group-hover/main:zoom-in-110 ease-in-out duration-200   "
                      src={item.image}
                      alt={"img-" + item.id}
                    />
                  </div>
                  <div className="absolute top-0 m-2 rounded-full bg-white">
                    <p className="rounded-full bg-[gold] p-1 text-[8px] font-bold uppercase tracking-wide text-black sm:py-1 sm:px-3">
                      {item.category}
                    </p>
                  </div>
                  <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                    <div className="mb-2 flex">
                      <p className="mr-3 text-sm font-semibold">
                        {"$" + item.price}
                      </p>
                    </div>
                    <h3 className="mb-1 text-sm font-semibold text-slate-700">
                      {item.title}
                    </h3>
                    <h3 className=" text-sm text-gray-400 flex items-center justify-center">
                      {Math.round(item.rating.rate) === 5 && (
                        <>
                          {" "}
                          <AiFillStar color="gold" size={20} />
                          <AiFillStar color="gold" size={20} />
                          <AiFillStar color="gold" size={20} />
                          <AiFillStar color="gold" size={20} />
                          <AiFillStar color="gold" size={20} />
                        </>
                      )}
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
                    </h3>
                  </div>
                </Link>
                <button
                  onClick={() => handleAdd(item)}
                  className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600"
                >
                  <div className="flex w-full items-center justify-center bg-slate-600 text-xs uppercase transition text-white group-hover:bg-[gold]  font-semibold group-hover/main:text-[gold] group-hover:text-white">
                    <TiShoppingCart
                      className="text-white group-hover/main:text-[gold] group-hover:text-white transition"
                      size={25}
                    />
                    ADD TO CART
                  </div>
                  <div className="flex items-center justify-center bg-slate-700 transition px-5 text-white font-semibold group-hover:bg-[#e6c407] group-hover:text-white group-hover/main:text-[gold] text-[18px]">
                    +
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default page;
