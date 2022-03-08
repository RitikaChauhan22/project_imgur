function showData() {
        async function nav() {
            let container = document.getElementById("container")
            var api = "THQmZAArw8DpyGkVnb8bK1CY7zkAbHDwx8yOO0vILFw"
            var x = "Dubai"
            let res = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${x}&client_id=${api}`);
            let data = await res.json();


            var output = [];
            for (var i = 0; i < data.results.length; i++) {
                output.push(data.results[i].urls)
            }
                output.forEach(function(app) {
                let div = document.createElement("div");
                let img = document.createElement("img")

                img.src = app.regular;
                div.append(img);
                container.appendChild(div)
            })
        }
        nav();
    }
export {showData};