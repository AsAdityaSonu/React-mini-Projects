import { useEffect, useState } from "react";

function useCurrencyInfo(Currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${Currency}.json`;

        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                setData(responseData[Currency]);
                console.log(responseData[Currency]);
            })
            .catch((error) => {
                console.error("Error fetching currency data:", error);
            });
    }, [Currency]);

    return data;
}

export default useCurrencyInfo;
