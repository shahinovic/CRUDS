/* get total, create product,
  save localStorage, clear inputs, read, count, delete, update, search, clean data */
  const title = document.querySelector('#title');
  const price = document.querySelector('#price');
  const taxes = document.querySelector('#taxes');
  const ads = document.querySelector('#ads');
  const discount = document.querySelector('#discount');
  const total = document.querySelector('#total');
  const count = document.querySelector('#count');
  const category = document.querySelector('#category');
  const submit = document.querySelector('#submit');
  const search = document.querySelector('#search');
  const searchTitle = document.querySelector('#searchTitle');
  const searchCategory = document.querySelector('#searchCategory');
  const inputs = document.querySelector('.inputs');
  
  
  window.onload = () => {
    Array.from(document.querySelectorAll('body input')).map(ele => ele.value = '');
    showData()
    Array.from(document.querySelectorAll('.inputs input')).map(ele => ele.style = 'position: relative;')
}

  // get total 


function getTotal() {
    if (price.value !== "") {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style = 'background-color: #040;';
    } else {
        total.innerHTML = '';
        total.style = 'background-color: rgb(127, 15, 7);'
    }
}
Array.from(document.querySelectorAll('.price input')).map(ele => ele.addEventListener('keyup', getTotal))

// CREATE PRODUCT 
let dataPro;
if(localStorage.data !== undefined  ) {
    dataPro = JSON.parse(localStorage.data);
} else {
    dataPro = [];
}

let validation = function(opj){

    let res = false;
    let problem;
    // console.log('validation work')

    if (opj.title == '') {
        // console.log('title work')
        problem = () => {
            title.focus();
            title.style = 'border-color: cyan; color: cyan';
            title.setAttribute('placeholder', 'Title Can\'t Be empty')
        } 
        return problem();
    } else if (opj.price == '') {
        console.log('price work')
        problem = () => {
            // console.log('price')
            title.style = 'border-color: rgba(170, 168, 168, 0.311); color: #fff;';
        price.focus();
            price.style = 'border-color: cyan; color: cyan';
            price.setAttribute('placeholder', 'Price Can\'t Be Empty')
        }
        return problem();
    }  else if (opj.taxes == '') {
        console.log('taxes work')
        problem = () => {
            title.style = 'border-color: rgba(170, 168, 168, 0.311); color: #fff;';
            price.style = 'border-color: rgba(170, 168, 168, 0.311); color: #fff;';
        taxes.focus();
            taxes.style = 'border-color: cyan; color: cyan';
            taxes.value = '';
            taxes.setAttribute('placeholder', 'Taxes Can\'t Be Empty')
        }
        return problem();
    } else if (opj.ads == '') {
        console.log('taxes work')
        problem = () => {
            title.style = 'border-color: rgba(170, 168, 168, 0.311); color: #fff;';
            price.style = 'border-color: rgba(170, 168, 168, 0.311); color: #fff;';
            taxes.style = 'border-color: rgba(170, 168, 168, 0.311); color: #fff;';
        ads.focus();
            ads.style = 'border-color: cyan; color: cyan';
            ads.value = '';
            ads.setAttribute('placeholder', 'Ads Can\'t Be Empty')
        }
        return problem();
    } else if (opj.category == '') {
        problem = () => {
            title.style = 'border-color: rgba(170, 168, 168, 0.311); color: #fff;';
            price.style = 'border-color: rgba(170, 168, 168, 0.311); color: #fff;';
            taxes.style = 'border-color: rgba(170, 168, 168, 0.311); color: #fff;';
            ads.style = 'border-color: rgba(170, 168, 168, 0.311); color: #fff;';
        category.focus();
            category.style = 'border-color: cyan; color: cyan';
            category.value = '';
            category.setAttribute('placeholder', 'Category Can\'t Be Empty');
        }
        return problem();
    } else {
        title.style = 'border-color: rgba(170, 168, 168, 0.311); color: #fff;';
            price.style = 'border-color: rgba(170, 168, 168, 0.311); color: #fff;';
            taxes.style = 'border-color: rgba(170, 168, 168, 0.311); color: #fff;';
            ads.style = 'border-color: rgba(170, 168, 168, 0.311); color: #fff;';
            category.style = 'border-color: rgba(170, 168, 168, 0.311); color: #fff;';
            title.setAttribute('placeholder', 'Title');
            price.setAttribute('placeholder', 'Price');
            taxes.setAttribute('placeholder', 'Taxes');
            ads.setAttribute('placeholder', 'Ads');
            category.setAttribute('placeholder', 'Category');
            
            if(opj.count > 1) {
            for(let i = 0; i < count.value; i++) {
                dataPro.push(opj);
            }
        } else {
            dataPro.push(opj);
        }
        Array.from(document.querySelectorAll('.inputs input')).map(ele => ele.value = '');
        getTotal()
        localStorage.setItem('data', JSON.stringify(dataPro))
        showData()
    }
}

submit.onclick = () => {
    let newPro = {
        title: title.value.toLowerCase(),
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value.toLowerCase()
    }


    validation(newPro);
    
    // if (!validation(newPro)) {
    //     console.log('work')
    //     validation(newPro)
    // } else {
    //     if(newPro.count > 1) {
    //         for(let i = 0; i < count.value; i++) {
    //             dataPro.push(newPro);
    //         }
    //     } else {
    //         dataPro.push(newPro);
    //     }
    //     Array.from(document.querySelectorAll('.inputs input')).map(ele => ele.value = '');
    //     getTotal()
    //     localStorage.setItem('data', JSON.stringify(dataPro))
    //     showData()
    // }
}

// read 


function showData() {
        let tbody = document.getElementById('tbody');
        tbody.innerHTML = '';
        for(let i = 0; i < dataPro.length; i++) {
            let tr = document.createElement('tr');
                let id = `${i + 1}`;
                let tdId = document.createElement('td')
                tdId.className = 'data';
                tdId    .appendChild(document.createTextNode(id));
                let tdTitle = document.createElement('td')
                tdTitle.className = 'data';
                tdTitle.appendChild(document.createTextNode(dataPro[i].title));
                let tdPrice = document.createElement('td')
                tdPrice.className = 'data';
                tdPrice.appendChild(document.createTextNode(dataPro[i].price));
                let tdTaxes = document.createElement('td')
                tdTaxes.className = 'data';
                tdTaxes.appendChild(document.createTextNode(dataPro[i].taxes));
                let tdAds = document.createElement('td')
                tdAds.className = 'data';
                tdAds.appendChild(document.createTextNode(dataPro[i].ads));
                let tdDiscount = document.createElement('td')
                tdDiscount.className = 'data';
                tdDiscount.appendChild(document.createTextNode(dataPro[i].discount));
                let tdTotal = document.createElement('td')
                tdTotal.className = 'data';
                tdTotal.appendChild(document.createTextNode(dataPro[i].total));
                let tdCategory = document.createElement('td')
                tdCategory.className = 'data';
                tdCategory.appendChild(document.createTextNode(dataPro[i].category));
                // update btn
                let updateBtn = document.createElement('button');
                updateBtn.setAttribute('id', 'update-btn');
                updateBtn.innerHTML = 'Update';
                updateBtn.addEventListener('click', updateFun); 
                let tdUpdate = document.createElement('td')
                tdUpdate.appendChild(updateBtn);

                // delete btn
                let deleteBtn = document.createElement('button');
                deleteBtn.setAttribute('id', 'delete-btn');
                deleteBtn.innerHTML = 'Delete';
                deleteBtn.addEventListener('click', delFun)
                let tdDelete = document.createElement('td')
                tdDelete.appendChild(deleteBtn);

                tr.appendChild(tdId);
                tr.appendChild(tdTitle);
                tr.appendChild(tdPrice)
                tr.appendChild(tdTaxes);
                tr.appendChild(tdAds);
                tr.appendChild(tdDiscount);
                tr.appendChild(tdTotal);
                tr.appendChild(tdCategory);
                tr.appendChild(tdUpdate);
                tr.appendChild(tdDelete);
            
            tbody.appendChild(tr);
        }
        let deleteAll = document.querySelector('#deleteAll');
        if(document.querySelector('#tbody').innerHTML !== ''){
            if (deleteAll.innerHTML === '') {
                let delAllBtn = document.createElement('button');
            delAllBtn.innerHTML = `Delete All`;
            delAllBtn.onclick = () => {
                dataPro = [];
                localStorage.clear();
                showData()
            }
            deleteAll.appendChild(delAllBtn);
            }
        } else {
            deleteAll.innerHTML = '';    
        }
}

// delete

function delFun(e) {
    let tr = e.target.parentElement.parentElement;
    let id = +tr.firstElementChild.innerHTML - 1;
    dataPro.splice(id, 1);
    console.log(tr)
    localStorage.data = JSON.stringify(dataPro);
    showData()
}

// update 

function updateFun(e) {
let tr = e.target.parentElement.parentElement;
let id = +tr.firstElementChild.innerHTML -1;
let opj = dataPro[id];
let updateBtn = document.createElement('button');
updateBtn.id = 'updateBtn';
updateBtn.innerHTML = 'update';
title.value = opj.title;
price.value = opj.price;
taxes.value = opj.taxes;
ads.value = opj.ads;
discount.value = opj.discount;
getTotal()
count.style = 'display: none;';
category.value = opj.category;
submit.style = 'display: none;';
if (!Array.from(inputs.children).includes(document.getElementById('updateBtn'))) {

    inputs.appendChild(updateBtn);
}
updateBtn.addEventListener('click', () => {
    let newPro = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        category: category.value,
    }
    dataPro[id] = newPro;
    localStorage.data = JSON.stringify(dataPro);
    showData()
    Array.from(document.querySelectorAll('.inputs input')).map(ele => ele.value = '');
    submit.style = 'display: block;';
    updateBtn.remove()
    count.style = 'display: block;';
})
}

// search
//basic search
search.addEventListener('keyup', () => {
    // let searchArr = [...dataPro];
    let trs = Array.from(document.querySelectorAll('tbody tr'))
    if (search.classList[0] === undefined) {
        let tds = Array.from(document.querySelectorAll('.data'));
    trs.map(ele => ele.style = 'display: none;');
    tds.map(ele => ele.innerHTML.includes(search.value.toLowerCase()) ? ele.parentElement.style = 'display: table-row;' : null);
    } else if (search.classList.contains('title')) {
        trs.map(ele => ele.style = 'display: none;');
        trs.map(ele => ele.children[1].innerHTML.startsWith(search.value.toLowerCase()) ? ele.style = 'display: table-row;' : null);    
    } else if(search.className = 'cat') {
        trs.map(ele => ele.style = 'display: none;');
        trs.map(ele => ele.children[7].innerHTML.startsWith(search.value.toLowerCase()) ? ele.style = 'display: table-row;' : null);            
    }
})

// search by title

searchTitle.addEventListener('click', () => {
    if (!search.classList.contains('title')) {
        search.focus();
        search.value = '';
        showData();
        search.className = '';
        search.classList.add('title')
        search.setAttribute('placeholder', 'search by title');
    } else {
        search.classList.remove('title')
        search.setAttribute('placeholder', 'search');
    }
})

searchCategory.addEventListener('click', () => {
    if (!search.classList.contains('cat')) {
        search.focus();
        search.value = '';
        showData();
        search.className = 'cat';
        search.setAttribute('placeholder', 'search by Category');
    } else {
        search.classList.remove('cat')
        search.setAttribute('placeholder', 'search');
    }
})