const fetchEmployees = async () => {
    const api = 'http://dummy.restapiexample.com/api/v1/employees';
    try {
        const response = await fetch(api);
        const { data } = await response.json();
        return data;
    }
    catch (error) {
        if (error) {
            return error.message;
        }
    }
};
console.log(fetchEmployees());
export {};
