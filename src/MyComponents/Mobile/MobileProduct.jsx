import React, { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
import img from "../../Images/d1.png";
import img2 from "../../Images/d16.png";
import img3 from "../../Images/d22.png";
import img4 from "../../Images/d23.png";
import img5 from "../../Images/d19.png";
import img6 from "../../Images/d20.png";
import img7 from "../../Images/d21.png";
import Baseurl from "../../Baseurl";
import axios from "axios";

const MobileProduct = () => {
  const navigate = useNavigate();

  const [mobileData,setMobileData] = useState(null)
  console.log(mobileData)

  const mobileList = async () => {
    try {
      let url = `${Baseurl()}api/v1/products/64a2d0a125dba018a6e0a5c6/64a3d408a42339de96cebf19`;
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.get(url, config);

      console.log(data.products[0]);
      setMobileData(data.products)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    mobileList();
  }, []);

  return (
    <>
      <div className="fashioncont" style={{ backgroundColor: "#fff" }}>
        <h3>Top Offers</h3>
        <div className="fashioncont1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">

{mobileData && mobileData.map((item)=>{
    return (
        

        <div
              className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg"
              onClick={() => navigate(`/mobile-view/${item._id}`)}
              key={item._id}
            >
              <img
                onClick={() => {
                  //navigate("/product-view", { state: "e" });
                }}
                src={item.images[1]}
                alt="e.title"
                className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
              />
              <h2 className="text-lg font-medium mb-2">
                {item.name}
                {/*e.title.length >= 20 ? "..." : ""*/}
              </h2>

              <h3 className="text-base">₹ {item.price}</h3>
            </div>
    )



})}

           
         
           
          
          </div>
        </div>
      </div>



      
      <div className="fashioncont" style={{ backgroundColor: "#fff" }}>
        <h3>Popular</h3>
        <div className="fashioncont1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
            <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
              <img
                onClick={() => {
                  //navigate("/product-view", { state: "e" });
                }}
                src={img4}
                alt="e.title"
                className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
              />
              <h2 className="text-lg font-medium mb-2">
                Product Name
                {/*e.title.length >= 20 ? "..." : ""*/}
              </h2>

              <h3 className="text-base">₹ 999</h3>
            </div>
            <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
              <img
                onClick={() => {
                  //navigate("/product-view", { state: "e" });
                }}
                src={img3}
                alt="e.title"
                className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
              />
              <h2 className="text-lg font-medium mb-2">
                Product Name
                {/*e.title.length >= 20 ? "..." : ""*/}
              </h2>

              <h3 className="text-base">₹ 999</h3>
            </div>
            <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
              <img
                onClick={() => {
                  //navigate("/product-view", { state: "e" });
                }}
                src={img4}
                alt="e.title"
                className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
              />
              <h2 className="text-lg font-medium mb-2">
                Product Name
                {/*e.title.length >= 20 ? "..." : ""*/}
              </h2>

              <h3 className="text-base">₹ 999</h3>
            </div>
            <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
              <img
                onClick={() => {
                  //navigate("/product-view", { state: "e" });
                }}
                src={img3}
                alt="e.title"
                className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
              />
              <h2 className="text-lg font-medium mb-2">
                Product Name
                {/*e.title.length >= 20 ? "..." : ""*/}
              </h2>

              <h3 className="text-base">₹ 999</h3>
            </div>
            <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
              <img
                onClick={() => {
                  //navigate("/product-view", { state: "e" });
                }}
                src={img4}
                alt="e.title"
                className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
              />
              <h2 className="text-lg font-medium mb-2">
                Product Name
                {/*e.title.length >= 20 ? "..." : ""*/}
              </h2>

              <h3 className="text-base">₹ 999</h3>
            </div>
            <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
              <img
                onClick={() => {
                  //navigate("/product-view", { state: "e" });
                }}
                src={img3}
                alt="e.title"
                className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
              />
              <h2 className="text-lg font-medium mb-2">
                Product Name
                {/*e.title.length >= 20 ? "..." : ""*/}
              </h2>

              <h3 className="text-base">₹ 999</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="fashioncont" style={{ backgroundColor: "#fff" }}>
        <h3>Latest</h3>
        <div className="fashioncont1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
            <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
              <img
                onClick={() => {
                  //navigate("/product-view", { state: "e" });
                }}
                src={img3}
                alt="e.title"
                className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
              />
              <h2 className="text-lg font-medium mb-2">
                Product Name
                {/*e.title.length >= 20 ? "..." : ""*/}
              </h2>

              <h3 className="text-base">₹ 999</h3>
            </div>
            <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
              <img
                onClick={() => {
                  //navigate("/product-view", { state: "e" });
                }}
                src={img4}
                alt="e.title"
                className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
              />
              <h2 className="text-lg font-medium mb-2">
                Product Name
                {/*e.title.length >= 20 ? "..." : ""*/}
              </h2>

              <h3 className="text-base">₹ 999</h3>
            </div>
            <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
              <img
                onClick={() => {
                  //navigate("/product-view", { state: "e" });
                }}
                src={img3}
                alt="e.title"
                className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
              />
              <h2 className="text-lg font-medium mb-2">
                Product Name
                {/*e.title.length >= 20 ? "..." : ""*/}
              </h2>

              <h3 className="text-base">₹ 999</h3>
            </div>
            <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
              <img
                onClick={() => {
                  //navigate("/product-view", { state: "e" });
                }}
                src={img4}
                alt="e.title"
                className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
              />
              <h2 className="text-lg font-medium mb-2">
                Product Name
                {/*e.title.length >= 20 ? "..." : ""*/}
              </h2>

              <h3 className="text-base">₹ 999</h3>
            </div>
            <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
              <img
                onClick={() => {
                  //navigate("/product-view", { state: "e" });
                }}
                src={img3}
                alt="e.title"
                className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
              />
              <h2 className="text-lg font-medium mb-2">
                Product Name
                {/*e.title.length >= 20 ? "..." : ""*/}
              </h2>

              <h3 className="text-base">₹ 999</h3>
            </div>
            <div className="product-card m-2 bg-white shadow-lg p-3  border rounded-lg">
              <img
                onClick={() => {
                  //navigate("/product-view", { state: "e" });
                }}
                src={img4}
                alt="e.title"
                className="h-44 cursor-pointer mx-auto flex flex-col items-center  object-cover overflow-hidden"
              />
              <h2 className="text-lg font-medium mb-2">
                Product Name
                {/*e.title.length >= 20 ? "..." : ""*/}
              </h2>

              <h3 className="text-base">₹ 999</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileProduct;
