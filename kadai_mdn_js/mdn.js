const displayDate = () => {
    const today = new Date();
    let thisYear = (today.getFullYear() + '年');
    let thisMonth = (today.getMonth() + '月');
    let thisDate = (today.getDate() + '日');
    console.log(thisYear + thisMonth + thisDate);
}

displayDate();
