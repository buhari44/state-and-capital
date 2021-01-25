//selector
const search=document.getElementById("search")
const matchList = document.getElementById("match-list")



//function
const inputValue = async searchText => {
    try {
        const res = await fetch ("20dee7787486d10db3bd1f55fae5fdf4/state_capitals.json")
        const states = await res.json()
    
    
        let matches = states.filter(state => {
            const regex = new RegExp(`^${searchText}`, 'gi')
            return state.name.match(regex) || state.abbr.match(regex)
        })

   
        if (searchText.length === 0) {
            matches = []
            searchText = ''
        
        }
        outputHtml(matches)
    } catch (err) {
        console.log("out of response")
    }
}
 
const outputHtml = match => {
    if (match.length > 0) {
        const html = match.map(item => 
            `<div class="card card-body mb-1">
            <h4>${item.name} (${item.abbr}) <span class="text-primary">
            
            ${item.capital}</span></h4>  
            <small> lat: ${item.lat} /
            long: ${item.long}</small>
    </div>`
        ).join('')
        matchList.innerHTML=html

    }
}

//eventListener
search.addEventListener("input", function () {
    inputValue(search.value)
    
})


// axios.get("20dee7787486d10db3bd1f55fae5fdf4/state_capitals.json").then(function (res) {
    
//     console.log(res.data)
// })