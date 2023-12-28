
import React from "react";

const Banner = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=1", {
    next: { revalidate: 60 },
  });
  const bannerImg = await res.json();
  console.log(bannerImg);

  return (
    <div>
      {bannerImg.map((img) => (
        <img className="w-screen h-lvh" src={img.image} key={img.id} />
      ))}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

    </div>
  );
};

export default Banner;
