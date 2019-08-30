
export default (text = "Please Click This!") => {

    const element = document.createElement("button");

    element.innerHTML = text;

    element.onclick = () =>
        import("./lazy")
        .then(lazy => {
            element.textContent = lazy.default;
        })
        .catch(err => {
            console.error(err);
        });

    return element;
};