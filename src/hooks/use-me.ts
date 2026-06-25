import { useState } from "react";

const useMe = () => {
    const me = {username: "Jack"};
    
    const [ data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);    
    const [error, setError] = useState(null);

    return { me, data, isLoading, error };
}

export default useMe;