const listItems = [
    { id: 1, name: 'Amin', family: 'Saeedi Rad' },
    { id: 2, name: 'Amir', family: 'Zehtab' },
    { id: 3, name: 'Qadir', family: 'Yolme' },
    { id: 4, name: 'Babak', family: 'Mohammadi' },
    { id: 5, name: 'Hasan', family: 'Ghahreman Zadeh' },

    { id: 6, name: 'Aminn', family: 'Saeedi Rad' },
    { id: 7, name: 'Amirr', family: 'Zehtab' },
    { id: 8, name: 'Qadirr', family: 'Yolme' },
    { id: 9, name: 'Babakk', family: 'Mohammadi' },
    { id: 10, name: 'Hasann', family: 'Ghahreman Zadeh' },

    { id: 11, name: 'Saeed', family: 'Ehsani' },
    { id: 12, name: 'Siamak', family: 'Modiri' },
    { id: 13, name: 'Mohsen', family: 'Ansari' },
    { id: 14, name: 'Mehran', family: 'Ali Pour' },
    { id: 15, name: 'Amir Hossein', family: 'Mahtabi' },

    { id: 16, name: 'Hossein', family: 'Amini' },
    { id: 17, name: 'Melika', family: 'Ehsani' },
    { id: 18, name: 'Qadir', family: 'Yolme' },
    { id: 19, name: 'Fatemeh', family: 'Alilou' },
    { id: 20, name: 'Ehsan', family: 'Tayyebi' },

    { id: 21, name: 'Zahra', family: 'Gholami' },
    { id: 22, name: 'Matin', family: 'Sahebi' },
    
];


let userListContainer = document.getElementById('list');
let paginationContainer = document.getElementById('pagination');

let currentPage = 1;
let rowsCount = 5;

function userList(allUsersArray, userContainer, currentPage, rowsCount){

    userListContainer.innerHTML = '';

    let endIndex = currentPage * rowsCount;
    let startIndex = endIndex - rowsCount;

    let paginatedUsers = allUsersArray.slice(startIndex, endIndex);

    paginatedUsers.forEach(function(user){

        let userElement = document.createElement('div');
        userElement.classList.add('item')
        userElement.innerHTML = user.name + " " + user.family;

        userListContainer.append(userElement);
    });
}

function setUpPagination(allUsersArray, pagesContainer, rowsCount){
    
    pagesContainer.innerHTML = '';

    let pagesCount = Math.ceil(allUsersArray.length / rowsCount);

    for(let i = 1; i < pagesCount + 1; i++){

        let button = btnGenerator(i, allUsersArray);
        paginationContainer.append(button)
    }

}

function btnGenerator(page, allUsersArray){

    let btn = document.createElement('button');
    btn.innerHTML = page;

    if(page === currentPage){
        btn.classList.add('active');
    }

    btn.addEventListener('click', function(){
        currentPage = page;

        userList(allUsersArray, userListContainer, currentPage, rowsCount);

        let prePage = document.querySelector('button.active');
        prePage.classList.remove('active');

        btn.classList.add('active');

    })

    return btn;

}

userList(listItems, userListContainer, currentPage, rowsCount);
setUpPagination(listItems, paginationContainer, rowsCount);






//////////////////////////////////////////////////////////////////////////////////////////