import { fetchAllNews } from "@/API/news";
import { fetchAllProductQuanlity } from "@/API/productQuanlity";
import EventComponents from "@/components/EventComponents";
import FooterComponents from "@/components/FooterComponents";
import HeaderComponents from "@/components/HeaderComponents";
import NewPagesComponents from "@/components/NewPagesComponents";
import OpenFirstComponents from "@/components/OpenFirstComponents";
import ProductReviewsComponents from "@/components/ProductReviewsComponents";
import ServiceComponents from "@/components/ServiceComponents";
import SubHeaderComponents from "@/components/SubHeaderComponents";
import { useEffect, useState } from "react";

export default async function Home() {
  // productQuantiy
  const productsQuantiy = await fetchAllProductQuanlity()
  // tintuc
  const news = await fetchAllNews()
  return (
    <>
      <SubHeaderComponents></SubHeaderComponents>
      <HeaderComponents></HeaderComponents>
      <OpenFirstComponents></OpenFirstComponents>
      <ServiceComponents listProductQuanlity={productsQuantiy ? productsQuantiy : []}></ServiceComponents>
      <EventComponents></EventComponents>
      <ProductReviewsComponents></ProductReviewsComponents>
      <NewPagesComponents listNews={news ? news : []}></NewPagesComponents>
      <FooterComponents></FooterComponents>
    </>
  );
}
