const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock)
}

transaction('order', {label: "ben and J", stock: "ice cream"});