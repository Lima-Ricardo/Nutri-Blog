export const Api = {
  loadPost: async function () {
    return await fetch("https://sujeitoprogramador.com/rn-api/?api=posts").then(
      (res) => {
        return res.json();
      }
    );
  },
};
export default Api;