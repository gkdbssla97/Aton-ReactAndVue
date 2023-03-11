let todoData = [];

const countPerPage = 10; // 페이지당 데이터 건수
const showPageCnt = 5; // 화면에 보일 페이지 번호 개수

$(function () {
    const todosUrl = 'http://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
    axios.get(todosUrl)
        .then(res => {

            todoData = res.data;
            setTable(1);
            setPaging(1);
        })
        .catch(err => console.error(err))
        .then(() => {
            // finally
        });

    $(document).on('click', 'div.paging>div.pages>span', function () {
        if (!$(this).hasClass('active')) {
            $(this).parent().find('span.active').removeClass('active');
            $(this).addClass('active');

            setTable(Number($(this).text()));
        }
    });

    $(document).on('click', 'div.paging>i', function () {
        const totalPage = Math.floor(todoData.length / countPerPage) + (todoData.length % countPerPage == 0 ? 0 : 1);
        const id = $(this).attr('id');
        //console.log(id);

        if (id == 'first_page') {
            setTable(1);
            setPaging(1);
        } else if (id == 'prev_page') {
            let arrPages = [];
            $('div.paging>div.pages>span').each(function (idx, item) {
                arrPages.push(Number($(this).text()));
            });

            const prevPage = _.min(arrPages) - showPageCnt;
            setTable(prevPage);
            setPaging(prevPage);
        } else if (id == 'next_page') {
            let arrPages = [];
            $('div.paging>div.pages>span').each(function (idx, item) {
                arrPages.push(Number($(this).text()));
            });

            const nextPage = _.max(arrPages) + 1;
            setTable(nextPage);
            setPaging(nextPage);
        } else if (id == 'last_page') {
            const lastPage = Math.floor((totalPage - 1) / showPageCnt) * showPageCnt + 1;
            setTable(lastPage);
            setPaging(lastPage);
        }
    });

});

function setTable(pageNum) {
    $('#tblTodo>tbody').empty();

    // filtering data
    const filteredData = _.slice(todoData, (pageNum - 1) * countPerPage, pageNum * countPerPage);
    //console.log(filteredData);

    let sTbodyHtml = '';
    for (let i = 0; i < filteredData.length; i++) {
        sTbodyHtml += '<tr>';
        sTbodyHtml += '  <td>' + filteredData[i].id + '</td>';
        sTbodyHtml += '  <td>' + filteredData[i].uid + '</td>';
        sTbodyHtml += '  <td>' + filteredData[i].password + '</td>';
        sTbodyHtml += '  <td>' + filteredData[i].first_name + '</td>';
        sTbodyHtml += '  <td>' + filteredData[i].last_name + '</td>';
        sTbodyHtml += '  <td>' + filteredData[i].username + '</td>';
        sTbodyHtml += '  <td>' + filteredData[i].email + '</td>';
        sTbodyHtml += '  <td>' + filteredData[i].avatar + '</td>';
        sTbodyHtml += '  <td>' + filteredData[i].gender + '</td>';
        sTbodyHtml += '  <td>' + filteredData[i].phone_number + '</td>';
        sTbodyHtml += '</tr>';
    }
    $('#tblTodo>tbody').append(sTbodyHtml);
}


function setPaging(pageNum) {
    const currentPage = pageNum;
    const totalPage = Math.floor(todoData.length / countPerPage) + (todoData.length % countPerPage == 0 ? 0 : 1);

    showAllIcon();

    if (currentPage <= showPageCnt) {
        $('#first_page').hide();
        $('#prev_page').hide();
    }
    if (
        totalPage <= showPageCnt ||
        Math.floor((currentPage - 1) / showPageCnt) * showPageCnt + showPageCnt + 1 > totalPage
    ) {
        $('#next_page').hide();
        $('#last_page').hide();
    }

    let start = Math.floor((currentPage - 1) / showPageCnt) * showPageCnt + 1;
    let sPagesHtml = '';
    for (const end = start + showPageCnt; start < end && start <= totalPage; start++) {
        sPagesHtml += '<span class="' + (start == currentPage ? 'active' : '') + '">' + start + '</span>';
    }
    $('div.paging>div.pages').html(sPagesHtml);
}

function showAllIcon() {
    $('#first_page').show();
    $('#prev_page').show();
    $('#next_page').show();
    $('#last_page').show();
}