
import("./component")
    .then(component => {

        var child = component.default();

        document.body.appendChild(child);
    })
    .catch(err => {
        console.error(err);
    });