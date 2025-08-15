let sessionList;

if (localStorage.getItem('sessionList')) {
    sessionList = JSON.parse(localStorage.getItem('sessionList'));
} else {
    sessionList = [];
}
sessionList.push(new Date());
localStorage.setItem('sessionList', JSON.stringify(sessionList));

