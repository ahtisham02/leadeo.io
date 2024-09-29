import { createContext, useState } from "react";

export const OrderContext = createContext<any>({})

const OrderProvider = ({ children }: any) => {
    const [estimationData, setEstimationData] = useState<any>({
        pickupDate: "2023-07-15",
        pickupTimeRange: "09:00 AM - 11:00 AM",
        deliveryOption: "Same Day",
        baseFee: 25.00,
        waitTimeFee: 5.00,
        commercialSurcharge: 10.00,
        isCommercial: false,
        confirmationFee: 3.00,
        confirmation: true,
        totalBeforeGST: 43.00,
        promotionDiscount: 5.00,
        netPriceBeforeGST: 38.00,
        gst: 1.90,
        totalPrice: 39.90
    })

    const setEstimation = (data: any) => {
        console.log(data)
        setEstimationData(data)
    }
    return (
        <OrderContext.Provider value={{ estimationData, setEstimation }}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderProvider

