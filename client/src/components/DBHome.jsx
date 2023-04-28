import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../api'
import { setAllProducts } from '../context/actions/productActions'
import { CChart } from "@coreui/react-chartjs"

const DBHome = () => {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  const cereals = products?.filter((item) => item.product_category === "cereals")

  const vegetables = products?.filter((item) => item.product_category === "vegetables")

  const fruits = products?.filter((item) => item.product_category === "fruits")

  const drinks = products?.filter((item) => item.product_category === "drinks")

  const cosmetics = products?.filter((item) => item.product_category === "cosmetics")

  const dairy = products?.filter((item) => item.product_category === "dairy")

  const snacks = products?.filter((item) => item.product_category === "snacks")


  useEffect(() => {
    if (!products) {
      getAllProducts().then((data) => {
        dispatch(setAllProducts(data))
      })
    }
  }, [])

  return (
    <div className="flex items-center justify-center flex-col pt-6 w-full h-full">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 h-full">
        <div className="flex items-center justify-center">
          <div className="w-340 md:w-508">
          <CChart
              type="bar"
              data={{
              labels: ["Cereals","Vegetables","Fruits","Drinks","Cosmetics","Dairy","Snacks"],
              datasets: [
      {
        label: 'Category wise Count',
        backgroundColor: '#f87979',
        data: [cereals?.length, vegetables?.length,fruits?.length,drinks?.length,cosmetics?.length,dairy?.length,snacks?.length],
      },
    ],
  }}
  labels="months"
/>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-275 md:w-460">
          <CChart
  type="doughnut"
  data={{
    labels: ["Orders","Delivered","Cancelled","Paid","Not Paid"],
    datasets: [
      {
        backgroundColor: ["#51FF00","$00B6FF","$008BFF","$FFD100","$FF00FB"],
        data: [40, 20, 80, 10],
      },
    ],
  }}
/>

          </div>
        </div>
      </div>
    </div>

  )
}

export default DBHome