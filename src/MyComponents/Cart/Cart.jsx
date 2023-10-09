import React, { useEffect, useState } from "react";
import Navbar from "../Homepage/Navbar/Navbar";
import NavbarCategory2 from "../Homepage/NavbarCategory/NavbarCategory2";
import Footer from "../Homepage/Footer/Footer";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import Baseurl from "../../Baseurl";
import axios from "axios";
import Razorpay1 from "./Razorpay1";
import img from "../../Images/d42.png";

const Cart = () => {
  const [pop, setPop] = useState(false);
  const [cartPro, setCartPro] = useState([]);
  const user = localStorage.getItem("userDataBoon");
  const [qua, setQua] = useState();
  const [add, setAdd] = useState("");
  const [total, setTotal] = useState([]);
  const getCart = async () => {
    let url = `${Baseurl()}api/cart/single-cart`;
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      setCartPro(res.data.data.products);
      console.log(res.data.data.products);
    } catch (error) {}
  };
  useEffect(() => {
    getCart();
  }, []);

  // Increase
  const inc = async (id) => {
    let url = `${Baseurl()}api/cart/updatequantity/${id}`;
    let data = { quantity: qua };
    try {
      const res = await axios.patch(url, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      getCart();
      console.log(res, "pppopopop");
    } catch (error) {
      console.log(error);
    }
  };
  // Decrease
  const dec = async (id) => {
    let url = `${Baseurl()}api/cart/updatequantity/${id}`;
    let data = { quantity: qua };
    try {
      const res = await axios.patch(url, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      getCart();
      console.log(res, "pppopopop");
    } catch (error) {
      console.log(error);
    }
  };
  // Checkout
  const check = async () => {
    let url = `${Baseurl()}api/order/checkout`;
    let url2 = `${Baseurl()}api/order/place-order`;
    const payload = {
      address: add,
    };

    try {
      const res = await axios.post(url, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("boon")}`,
        },
      });
      setAdd("");
      setTotal(res.data.order);

      setPop(true);
      const res2 = await axios.post(
        url2,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("boon")}`,
          },
        }
      );
      localStorage.setItem("orderID", res2.data.data.orderId);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <NavbarCategory2 />
      <div className="cartcont">
        <div className="cartcontl">
          <div className="cartconttop">
            <div className="cartconttopl">
              <h3>My Cart</h3>
            </div>
            <div className="cartconttopr">
              <p>Delivered to</p>
              <select className="cartselect">
                <option value="">New Delhi</option>
                <option value="new delhi">New Delhi</option>
                <option value="baraut"></option>
                <option value="baghpat"></option>
              </select>
            </div>
          </div>
          <div className="cartcont2">
            <div className="cartcont2l">
              <div className="cartprod">
                <div className="cartprodl">
                  <img src={img} alt="" />
                </div>
                <div className="cartprodr">
                  <h6>Product Name</h6>
                  <p>Product color detail</p>
                  <p>Seller:</p>
                  <p> &#x20b9; 199</p>
                </div>
              </div>
            </div>
            <div className="cartcont2r">
              <h6>Deliverd by Tue Apr 26</h6>
              <p>7 Days Replacement Policy</p>
            </div>
          </div>
        </div>
        <div className="cartcontr">
          <h5>Price Details</h5>
          <hr style={{ width: "90%", marginTop: "2%" }} />
          <div className="cartprice">
            <p>Price (1 Item)</p>
            <p>&#x20b9; 499</p>
          </div>
          <div className="cartprice">
            <p>Discount</p>
            <p>&#x20b9; 300</p>
          </div>
          <div className="cartprice">
            <p>Delivery Charge</p>
            <p>&#x20b9; 50</p>
          </div>
          <hr style={{ width: "90%", marginTop: "2%", color: "#333" }} />
          <div className="cartprice">
            <p style={{ fontWeight: "500px" }}>Total Amount</p>
            <p>&#x20b9; 249</p>
          </div>
          <hr style={{ width: "90%", marginTop: "2%", color: "#333" }} />
          <p style={{color:"#1C9D31"}}>You will save &#x20b9; 300 on this order </p>
        </div>
      </div>
      {/*<div className="" style={{backgroundColor:"#fff"}}>
        <h1 className="text-center text-gray-600 text-4xl font-semibold mt-8">
          Your Cart
        </h1>
        <div className="md:flex  ">
          <div className=" md:w-3/4 rounded-xl border-[#0000000e] border bg-[#f8f8f8ab] mt-8  mx-4">
            {cartPro?.map((c, i) => {
              return (
                <div
                  key={i}
                  className="md:flex mt-2 bg-white p-3 rounded-xl md:justify-between md:shadow mx-2 my-2 "
                >
                  <div className="flex space-x-6 ">
                    <div className="space-y-2">
                      <h2 className="text-xl font-semibold">
                        {c.product.title}
                      </h2>
                      <h2>
                        <span className="font-medium">Size:</span> XL
                      </h2>
                      <h2>
                        <span className="font-medium">Price:</span> Rs.
                        {c.product.price}/-
                      </h2>
                    </div>
                  </div>
                  <div className="md:flex items-center">
                    <div className="flex mt-5 border-t-2  md:border-t-0 pt-4 md:pt-0 md:mt-0 items-center space-x-2 ">
                      <h2 className="text-lg mr-10">
                        <span className="font-medium"> Quantity:</span>{" "}
                        {c.quantity}
                      </h2>
                      <AiFillMinusCircle
                        onClick={() => {
                          inc(c.product._id);
                          setQua(c.quantity - 1);
                          console.log(c.product._id);
                        }}
                        className="text-3xl cursor-pointer "
                      />
                      <span className="outline-none px-2 rounded-md border border-[#0000004a] bg-gray-300">
                        {c.quantity}
                      </span>
                      <AiFillPlusCircle
                        onClick={() => {
                          dec(c.product._id);
                          setQua(c.quantity + 1);
                          console.log(c.product._id);
                        }}
                        className="text-3xl cursor-pointer "
                      />
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          <div className=" md:w-1/4 bg-[#f8f8f8ab] mt-8    rounded-xl mx-4">
     
            <div className="m-3">
              <input
                type="text"
                value={add}
                onChange={(e) => setAdd(e.target.value)}
                placeholder="Address"
                className="border outline-none mt-4 w-full py-2 px-3 "
              />
              <div
                onClick={check}
                className="flex justify-center cursor-pointer rounded-md bottom-0 py-2 bg-black my-2 mx-2"
              >
                <button className="text-white font-medium">Check Out</button>
              </div>
            </div>
            {pop ? (
              <div className="m-3">
                <div className="m-3 border-b-2 border-black pb-2">
                  <h2 className="text-normal text-black font-medium">
                    Price Details
                  </h2>
                </div>
                <div className="flex shadow py-2 px-2 rounded-md  bg-white justify-between mx-2">
                  <h2>Price:</h2>
                  <h2>Rs.{total.grandTotal}/-</h2>
                </div>
                <div className="flex shadow mt-2 py-2 px-2 rounded-md  bg-white justify-between mx-2">
                  <h2>Shipping Charge:</h2>
                  <h2>{total.shippingPrice}</h2>
                </div>
                <hr className="border-dashed border-[#0000004f] mt-5 mb-5" />
                <div className="flex shadow mt-2 py-2 px-2 rounded-md  bg-white justify-between mx-2">
                  <h2>Total Amount:</h2>
                  <h2>Rs.{total.amountToBePaid}/-</h2>
                </div>
                <hr className="border-dashed border-[#0000004f] mt-5 mb-5" />

                <div className="flex justify-center cursor-pointer rounded-md bottom-0 my-4 py-2 bg-black mx-2">
                  <button
                    onClick={() => Razorpay1(total)}
                    className="text-white font-medium"
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>*/}
      <Footer />
    </>
  );
};

export default Cart;
