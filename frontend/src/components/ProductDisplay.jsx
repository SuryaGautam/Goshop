import React, { useState, useContext } from "react";
import product_rt_1 from "../assets/product_rt_1.png";
import product_rt_2 from "../assets/product_rt_2.png";
import product_rt_3 from "../assets/product_rt_3.png";
import product_rt_4 from "../assets/product_rt_4.png";
import { MdStar } from "react-icons/md";
import { ShopContext } from "../Context/ShopContext";
import { TbArrowRight } from "react-icons/tb";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState('S');

  const sizes = ["S", "M", "L", "XL"];

  const handleBuyNow = () => {
    addToCart(product.id);
  };

  return (
    <section>
      <div className="flex items-center flex-wrap gap-x-2 medium-16 my-4 capitalize">
      Home <TbArrowRight /> Shop <TbArrowRight /> {product.category}{" "}
      <TbArrowRight /> {product.name}
    </div>
      <div className="flex flex-col gap-14 xl:flex-row">
        <div className="flex gap-x-4 xl:flex-1">
          <div className="flex flex-col gap-[7px] flex-wrap">
            <img
              src={product_rt_1}
              alt="productImg"
              className="max-h-[99px]"
            />
            <img
              src={product_rt_2}
              alt="productImg"
              className="max-h-[99px]"
            />
            <img
              src={product_rt_3}
              alt="productImg"
              className="max-h-[99px]"
            />
            <img
              src={product_rt_4}
              alt="productImg"
              className="max-h-[99px]"
            />
          </div>
          <div>
            <img src={product.image} alt="" />
          </div>

          <div className="flex-col flex xl:flex-1">
            <h3 className="h3">{product.name}</h3>
            <div className="flex gap-x-2 text-secondary medium-22">
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <p>(111)</p>
            </div>
            <div className="flex gap-x-6 medium-20 my-4">
              <div className="line-through">₹{product.old_price}</div>
              <div className="text-secondary">₹{product.new_price}</div>
            </div>
            <div className="mb-4">
              <h4 className="flex gap-3 my-3">Select Size:</h4>
              <div className="flex gap-3 my-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`ring-2 h-10 w-10 flexCenter cursor-pointer ${
                      selectedSize === size
                        ? "ring-slate-900"
                        : "ring-slate-900/10"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-y-3 mb-4 max-w-[555px]">
                <button
                  onClick={() => addToCart(product.id)}
                  className="btn_dark_outline !rounded-none uppercase regular-14 tracking-widest"
                >
                  Add to cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="btn_dark_rounded !rounded-none uppercase regular-14 tracking-widest"
                >
                  Buy it now
                </button>
              </div>
              <p>
                <span className="medium-16 text-tertiary">Category : </span>
                {(product.category).charAt(0).toUpperCase() + (product.category).slice(1)} | Jacket | Winter
              </p>
              <p>
                <span className="medium-16 text-tertiary">Tags :</span> Modern |
                Latest
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
      <div className="flex gap-3 mb-4">
        <button className="btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36">
          Description
        </button>
      </div>
      <div className="flex flex-col pb-16">
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          reprehenderit itaque dolorum eligendi aliquid minima aspernatur iure
          libero porro enim. Nam odit debitis at doloribus quasi fugit dolores
          quia tempore!
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis quod
          tenetur accusantium ab, dolor neque fugit itaque dicta distinctio
          amet.
        </p>
      </div>
    </div>
    </section>
  );
};

export default ProductDisplay;
