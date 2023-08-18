const fetchFunc = async ({ queryKey }) => {
  const id = queryKey[1];
  const URL = `https://api.slingacademy.com/v1/sample-data/photos/${id}`;

  // Fetch Call with try catch Block
  // try {
  //   const response = await fetch(URL);
  //   if (!response.ok) {
  //     throw new Error("Network response was not ok");
  //   }
  //   const result = await response.json();
  //   return result;
  // } catch (error) {
  //   throw error;
  // }

  // Fetch Call with then catch Block
  return fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Unkown error Occured, plzz try again!!");
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error("Failed to fetch");
    });
};

export default fetchFunc;
